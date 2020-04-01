<template>
  <div class="wrapper">
    <Menu/>
    <div class="list">
      <div class="loading" v-if="loading">
        <div class="lds-facebook"><div></div><div></div><div></div></div>
      </div>
      <div class="no-game" v-if="!loading && !game" data-aos="zoom-in">brak gier</div>
      <MyGameTile
      v-if="game"
      :key="game.id"
      :id="game.id"
      :title="game.name"
      :description="game.description"
      :date_start="game.date_start"
      :date_end="game.date_end"
      :image="game.picture.url"
      data-aos="fade-up"
      @returned="cleanGame"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Menu from '../components/Menu'
import MyGameTile from '../components/MyGameTile'

export default {
  name: 'MyGames',
  components: {
    Menu,
    MyGameTile
  },
  data() {
    return {
      game: null,
      error: null,
      loading: true,
    }
  },
  methods: {
    cleanGame() {
      this.game = null;
    }
  },
  mounted() {
    axios({
      method: 'post',
      url: 'https://wypozyczalnia-gier.herokuapp.com/mygames',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }, 
    }).then(response => {
      this.game = response.data.game;
      this.loading = false;
    }).catch(err => {
      this.error = err;
      this.loading = false;
    })
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #FFF9E3;
}

.list {
  margin-top: 5rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
}

.no-game {
  font-size: 1.5rem;
  margin-top: 1rem;
  color: rgb(97, 93, 84);
  opacity: 0.8;
}

.loading {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #F5BB33;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}
</style>