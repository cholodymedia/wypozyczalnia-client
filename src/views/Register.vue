<template>
  <div class="container">
    <Nav/>
    <div class="error" v-if="error">{{ error }}</div>
    <div class="main">
      <img :src="rejestracja" alt="Rejestracja">
      <UserInput :class="{ email: true, 'input-error': email_error }" :prop="email" @change="emailUpdate"/>
      <SecretInput :class="{ password: true, 'input-error': password_error }" :prop="password" @change="passwordUpdate"/>
      <Button text="Zarejestruj" class="button" @clicked="register"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Nav from '../components/Nav'
import rejestracja from '../assets/rejestracja.png'
import UserInput from '../components/UserInput'
import SecretInput from '../components/SecretInput'
import Button from '../components/Button'
import validator from 'email-validator'

export default {
  name: 'Login',
  data() {
    return {
      rejestracja,
      error: false,
      email: '',
      password: '',
      input_error: false
    }
  },
  components: {
    Nav,
    UserInput,
    SecretInput,
    Button
  },
  methods: {
    register() {
      this.error = ''
      this.input_error = false;
      if(this.email == '' || this.password =='' || !validator.validate(this.email)) {
        this.input_error = true;
        if(!validator.validate(this.email) && this.email != '' && this.password != '') {
          this.error = 'Blędny email';
        }else {
          this.error = 'Wypełnij pola!!!';
        }
      }else {
        axios({
          method: 'post',
          url: 'https://wypozyczalnia-gier.herokuapp.com/register',
          headers: {}, 
          data: {
            email: this.email,
            password: this.password
          }
        }).then(response => {
          localStorage.setItem("token", response.data.token);
          this.$router.push('/catalog');
        }).catch(() => {
          this.error = 'Ten email jest już zajęty';
          this.email = '';
          this.password = '';
        })
      }
    },
    emailUpdate(value) {
      this.email = value;
    },
    passwordUpdate(value) {
      this.password = value;
    }
  },
  computed: {
    email_error() {
      if(this.email == '' && this.input_error) {
        return true;
      }else {
        return false;
      }
    },
    password_error() {
      if(this.password == '' && this.input_error) {
        return true;
      }else {
        return false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #FFF9E3;
}

.error {
  position: fixed;
  top: 7rem;
  width: 100%;
  display: flex;
  justify-content: center;
  color: red;
  font-size: 1.2rem;
  animation: shake 0.8s forwards;
}

.input-error {
  border: 2px solid red;
}

.main {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.email {
  margin-top: 3rem;
}

.password {
  margin-top: 2rem;
}

.button {
  margin-top: 3rem;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>