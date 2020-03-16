<template>
  <div class="home">
    <Nav/>
    <div class="main">
      <img :src="bareo" alt="bareo">
      <div class="description">Wypożyczalnia Gier Planszowych</div>
    </div>
    <div class="buttons">
      <Button text="Logowanie" class="button" @clicked="login"/>
      <Button text="Rejestracja" class="button" @clicked="register"/>
    </div>
  </div>
</template>

<script>
import bareo from '@/assets/bareo.png'
import Button from '@/components/Button'
import Nav from '@/components/Nav.vue'

export default {
  name: 'Home',
  data() {
    return {
      bareo
    }
  },
  components: {
    Button,
    Nav
  },
  methods: {
    login() {
      this.$router.push('/login');
    },
    register() {
      this.$router.push('/register');
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #FFF9E3;
  }

  .main {
    width: 100%;
    flex: 1.9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    img {
      margin-top: 4rem;
    }

    .description {
      width: 60%;
      text-align: center;
      font-size: 1.5rem;
      color: rgba(0, 0, 0, 0.582);
      margin-top: 7rem;
      line-height: 2.5rem;
    }
  }

  .buttons {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;

    .button {
      margin-top: 2rem;
    }
  }
</style>
