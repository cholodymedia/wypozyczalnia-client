<template>
  <nav>
    <div class="logo">
      <img :src="logo" alt="logo" @click="goHome">
    </div>
    <div class="events" @click="events">Wydarzenia</div>
  </nav>
</template>

<script>
import logo from '@/assets/logo.png'

export default {
  name: 'Nav',
  data() {
    return {
      logo
    }
  },
  methods: {
    goHome() {
      if(this.$router.currentRoute.name != 'Home') {
        this.$router.push('/');
      }
    },
    events() {
      this.$router.push('/events');
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: 5rem;
  display: flex;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  .logo {
    width: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 3rem;
    }
  }

  .events {
    width: auto;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 1.4rem;
    font-weight: 400;
    margin-right: 1rem;
    color: rgba(0, 0, 0, 0.582);
    transition: 0.2s;

    &:hover {
      transform: scale(0.95);
    }
  }
}
</style>