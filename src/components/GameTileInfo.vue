<template>
  <div class="box">
    <div class="image">
      <img :src="image">
    </div>
    <div class="title">{{ title }}</div>
    <div class="description">{{ description }}</div>
    <div class="unavaliable" v-if="!status">
      <div class="status">
        <font-awesome-icon :icon="['fas','times-circle']" class="icon"/>
        <span>niedostępna</span>
      </div>
      <div class="date">
        <span class="info">Gra powinna być dostępna od:</span>
        <span class="day">{{ date_end.split('T')[0] }}</span>
      </div>
    </div>
    <div class="avaliable" v-if="status">
      <div class="status" v-if="!borrow">
        <font-awesome-icon :icon="['fas','check-circle']" class="icon"/>
        <span>dostępna</span>
      </div>
      <div class="days-box" v-if="borrow">
        <div class="control" @click="daysMinus">
          <font-awesome-icon :icon="['fas','minus-circle']" class="icon minus"/>
        </div>
        <div class="number">{{ days }}</div>
        <div class="control" @click="daysPlus">
          <font-awesome-icon :icon="['fas','plus-circle']" class="icon plus"/>
        </div>
      </div>
      <div class="button-box">
        <font-awesome-icon :icon="['fas','times-circle']" class="cancel" v-if="borrow" @click="borrowFalse"/>
        <button @click="borrowTrue">Wypożycz</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import default_game_icon from '../assets/defalut_game_icon.png'

export default {
  name: 'GameTileInfo',
  data() {
    return {
      borrow: false,
      days: 5,
    }
  },
  props: {
    id: String,
    title: String,
    description: String,
    date_end: String,
    status: Boolean,
    image: {
      type: String,
      default: default_game_icon
    }
  },
  methods: {
    borrowTrue() {
      if(this.borrow) {
        this.addLoan();
      } else {
        this.borrow = true;
      }
    },
    borrowFalse() {
      this.borrow = false;
    },
    daysMinus() {
      if(this.days > 1) {
        this.days--
      }
    },
    daysPlus() {
      if(this.days < 10) {
        this.days++
      }
    },
    addLoan() {
      axios({
        method: 'post',
        url: 'http://192.168.1.105:5000/addloan',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        data: {
          gameID: this.id,
          days: this.days
        } 
      }).then(() => {
        this.$router.push('/mygames');
      }).catch(() => {
        alert('błąd serwera');
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 90%;
  min-height: 20rem;
  height: auto;
  border-radius: 1rem;
  background-color: rgba(248, 196, 73, 0.582);
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.2s;
}

.image {
  width: 100%;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 10rem;
    border-radius: 1rem;
  }
}

.title {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
}

.description {
  width: 75%;
  height: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  text-align: justify;
  color: rgba(126, 92, 14, 0.815);
  line-height: 1.4rem;
  justify-content: center;
}

.unavaliable {
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  color: rgb(136, 38, 38);
}

.status {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-left: 0.5rem;
    font-size: 1.2rem;
  } 
}

.icon {
  font-size: 1.5rem;
}

.date {
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.info {
  color: black;
}

.day {
  margin-top: 0.5rem;
  font-size: 1.3rem;
  font-weight: bold;
}

.avaliable {
  width: 100%;
  min-height: 8rem;
  display: flex;
  flex-direction: column;
  color: rgb(38, 136, 38);
}

.button-box {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .cancel {
    font-size: 2rem;
    color: rgb(136, 38, 38);
    margin-right: 1rem;
  }

  button {
    border: none;
    outline: none;
    width: 65%;
    height: 3rem;
    border-radius: 2rem;
    font-size: 1.3rem;
    background-color: rgb(47, 179, 47);
    color: white
  }
}

.days-box {
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .number {
    height: 80%;
    width: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    border: 1px solid rgb(189, 139, 22);
    background-color: white;
    color: black;
  }

  .control {
    height: 80%;
    width: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .minus {
      color: rgb(136, 38, 38);
    }
  }
}
</style>