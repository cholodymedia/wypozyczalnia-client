<template>
  <div class="box">
    <div class="left">
      <img :src="person" alt="Person">
    </div>
    <div class="right">
      <input type="email" name="email" placeholder="Email" :value="prop" @input="change">
    </div>
  </div>
</template>

<script>
import person from '../assets/icon_person.png'

export default {  
  name: 'UserInput',
  props: {
    prop: String
  },
  data() {
    return {
      person,
    }
  },
  methods: {
    change() {
      let input = document.getElementsByName('email')[0].value;
      this.$emit('change', input);
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 17rem;
  height: 3.2rem;
  background: #D6D6D6;
  border-radius: 2rem;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.left {
  width: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right {
  flex: 1;

  input {
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    outline: none;
    padding-right: 1.5rem;
    color: grey;
    font-size: 1rem;
    font-weight: 700;
  }
}
</style>