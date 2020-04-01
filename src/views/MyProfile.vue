<template>
  <div class="wrapper">
    <Menu/>
    <div class="main">
      <div class="loading" v-if="loading">
        <div class="lds-facebook"><div></div><div></div><div></div></div>
      </div>
      <font-awesome-icon :icon="['fas','user-circle']" class="user-circle" v-if="!loading" data-aos="zoom-in"/>
      <div class="email" v-if="!loading" data-aos="zoom-in">{{ user.email }}</div>
      <div class="logout" @click="logOut" v-if="!loading" data-aos="fade-up">Wyloguj</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Menu from '../components/Menu'

export default {
  name: 'MyProfile',
  data() {
    return {
      user: null,
      error: null,
      loading: true
    }
  },
  components: {
    Menu,
  },
  methods: {
    logOut() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    }
  },
  mounted() {
    axios({
      method: 'post',
      url: 'https://wypozyczalnia-gier.herokuapp.com/userinfo',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }).then(response => {
      this.user = response.data;
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

.main {
  margin-top: 5rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
}

.user-circle {
  font-size: 8rem;
  color: rgb(54, 54, 54);
}

.email {
  margin-top: 1.5rem;
  color: rgb(54, 54, 54);
}

.logout {
  width: 15rem;
  height: 3.5rem;
  background-color: #F5BB33;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(119, 88, 17);
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 3rem;
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