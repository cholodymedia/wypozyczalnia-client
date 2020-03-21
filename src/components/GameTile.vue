<template>
  <div class="box" @click="gameInfo">
    <div class="left">
      <img :src="image">
    </div>
    <div class="right">
      <div class="title">{{ title }}</div>
      <div class="description">{{ description.split(' ').splice(0, 6).join(' ') + ' ...' }}</div>
      <div class="status" v-if="status">
        <font-awesome-icon :icon="['fas','check-circle']" class="icon available"/>
        <span class="status-text">dostępna</span>
      </div>
      <div class="status" v-if="!status">
        <font-awesome-icon :icon="['fas','times-circle']" class="icon unavailable"/>
        <span class="status-text">niedostępna</span>
      </div>
    </div>
  </div>
</template>

<script>
import default_game_icon from '../assets/defalut_game_icon.png'

export default {
  name: 'GameTile',
  props: {
    id: String,
    title: String,
    description: String,
    status: Boolean,
    image: {
      type: String,
      default: default_game_icon
    }
  },
  methods: {
    gameInfo() {
      this.$router.push('/gameinfo?id=' + this.id);
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 90%;
  height: 10rem;
  border-radius: 1rem;
  background-color: rgba(248, 196, 73, 0.582);
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
}

.left {
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 75%;
  border-radius: 1rem;
}

.right {
  height: 100%;
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 2rem;
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

.status {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 1.2rem;
}

.icon {
  font-size: 1.2rem;
}

.available {
  color: rgb(38, 136, 38);
}

.unavailable {
  color: rgb(136, 38, 38);
}

.status-text {
  margin-left: 0.5rem;
  margin-right: 1rem;
}
</style>