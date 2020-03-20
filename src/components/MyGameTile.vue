<template>
  <div class="box">
    <div class="top">
      <div class="left">
        <img :src="image">
      </div>
      <div class="right">
        <div class="title">{{ title }}</div>
        <div class="description">{{ description }}</div>
      </div>
    </div>
    <div class="bottom">
      <div class="data">
        <font-awesome-icon :icon="['fas','calendar-plus']" class="icon"/>
        <span>Data wypożyczenia: <b>{{ date_start.split('T')[0] }}</b></span>
      </div>
      <div class="data">
        <font-awesome-icon :icon="['fas','hourglass-end']" class="icon"/>
        <span>Termin oddania: <b>{{ date_end.split('T')[0] }}</b></span>
      </div>
      <div class="return"><button @click="returnGame">Oddaj grę</button></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import default_game_icon from '../assets/defalut_game_icon.png'

export default {
  name: 'MyGameTile',
  props: {
    id: String,
    title: String,
    description: String,
    status: Boolean,
    date_start: String,
    date_end: String,
    image: {
      type: String,
      default: default_game_icon
    }
  },
  methods: {
    returnGame() {
        axios({
        method: 'post',
        url: 'http://192.168.1.105:5000/deleteloan',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        data: {
          gameID: this.id
        } 
      }).then(() => {
        this.$emit('returned');
      }).catch(() => {
        this.$emit('error');
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.box {
  width: 90%;
  height: 20rem;
  border-radius: 1rem;
  background-color: rgba(248, 196, 73, 0.582);
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
}

.top {
  display: flex;
  flex-direction: row;
  flex: 1;
}

.bottom {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 10rem;
}

.left {
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

img {
  width: 75%;
  border-radius: 1rem;
  margin-top: 2rem;
}

.right {
  height: 100%;
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 3rem;
}

.title {
  font-size: 1.2rem;
  color: rgb(126, 92, 14);
  font-weight: bold;
}

.description {
  font-size: 1rem;
  color: rgba(126, 92, 14, 0.815);
  margin-top: 0.5rem;
  width: 90%;
  height: auto;
  line-height: 1.4rem;
}

.data {
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: flex-start;
  padding-left: 1rem;
  align-items: center;
  color: rgb(126, 92, 14);

  span {
    margin-left: 1rem;
  }
}

.return {
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 80%;
    height: 3rem;
    border: none;
    outline: none;
    background-color: rgb(136, 38, 38);
    border-radius: 1.5rem;
    color: white;
    font-size: 1rem;
    font-weight: bold;
  }
}
</style>