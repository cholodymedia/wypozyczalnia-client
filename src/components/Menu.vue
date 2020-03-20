<template>
  <nav>
    <div :class="{ item: true, current: isList }" @click="goList">
      <font-awesome-icon :icon="['fas','list-ul']" class="icon"/>
      <span>Lista Gier</span>
    </div>
    <div :class="{ item: true, current: isMyGames }" @click="goMyGames">
      <font-awesome-icon :icon="['fas','box-open']" class="icon"/>
      <span>Moje Gry</span>
    </div>
    <div :class="{ item: true, current: isMyProfile }" @click="goMyProfile">
      <font-awesome-icon :icon="['fas','user-alt']" class="icon"/>
      <span>Moje Konto</span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  computed: {
    isList() {
      if(this.$route.name == "Catalog") {
        return true;
      } else {
        return false;
      }
    },
    isMyGames() {
      if(this.$route.name == "MyGames") {
        return true;
      } else {
        return false;
      }
    },
    isMyProfile() {
      if(this.$route.name == "MyProfile") {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    goList() {
      if(this.$route.name != "Catalog") {
        this.$router.push('/catalog');
      }
    },
    goMyGames() {
      if(this.$route.name != "MyGames") {
        this.$router.push('/mygames');
      }
    },
    goMyProfile() {
      if(this.$route.name != "MyProfile") {
        this.$router.push('/myprofile');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  background-color: #F5BB33;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
}

.item {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: white;
  opacity: 0.7;
  transition: 0.2s;
}

.current {
  color: rgb(160, 119, 23);
  opacity: 1;
}

.icon {
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
}

span {
  font-size: 1rem;
  margin-bottom: 0.6rem;
  font-weight: bold;
  cursor: pointer;
}
</style>