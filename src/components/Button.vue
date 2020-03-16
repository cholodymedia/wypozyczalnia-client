<template>
  <div class="button" @click="clicked">{{ text }}</div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String
  },
  methods: {
    clicked() {
      this.$emit('clicked');
    }
  }
}
</script>

<style lang="scss" scoped>
  .button {
    width: 17rem;
    height: 3.2rem;
    background: linear-gradient(90deg, #F5BB33 0%, #F76C7A 100%);
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.5rem;
    transform: scale(1);
    transition: 0.2s;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:hover {
      cursor: pointer;
      transform: scale(0.97);
    }
  }
</style>