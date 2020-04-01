<template>
  <div class="wrapper">
    <Menu/>
    <div class="list">
      <div class="loading" v-if="loading">
        <div class="lds-facebook"><div></div><div></div><div></div></div>
      </div>
      <GameTile
      v-for="game in games"
      :key="game.id"
      :id="game.id"
      :title="game.name"
      :description="game.description"
      :status="game.avaliable"
      :image="game.picture.url"
      data-aos="fade-up"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Menu from '../components/Menu'
import GameTile from '../components/GameTile'

export default {
  name: 'Catalog',
  components: {
    Menu,
    GameTile
  },
  data() {
    return {
      games: [],
      error: null,
      loading: true,
    }
  },
  mounted() {
    axios({
      method: 'post',
      url: 'https://wypozyczalnia-gier.herokuapp.com/games',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }, 
    }).then(response => {
      this.games = response.data.games;
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