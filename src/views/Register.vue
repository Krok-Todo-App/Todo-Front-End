<template>
  <div class="centered">
    <h3>Register</h3>
    <form @click.prevent="register">
      <div class="form-controls">
        <input v-model="name" required type="text" placeholder="Введите ваше имя">
        <input v-model="email" required type="email" placeholder="Введите ваш email">
        <input v-model="password" required type="text" placeholder="Придумайте пароль">
      </div>
      <button type="submit">Зарегистрироваться</button>
      <span>
        Зарегистрированы? <router-link to="/login" exact>Авторизоваться</router-link>
      </span>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data: () => ({
    name: "",
    email: "",
    password: ""
  }),
  methods: {
    async register(){
        if(this.name.length && this.email.length && this.password.length) {
          const result = await this.$store.dispatch("register", {name: this.name, email: this.email, password: this.password})
            if(result) {
                await this.$router.push('/')
            }
        }
    }
  },
  created() {
    if(this.$store.state.jwt) {
      this.$router.push('/')
    }
  },
  mounted() {
    document.title = "Todo App | Зарегистрироваться"
  }
}
</script>

<style scoped lang="scss">
.centered {
  margin-top: 260px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.form-controls {
  width: 100%;

  display: flex;
  flex-direction: column;

  input {
    padding: 0 20px;
    height: 50px;
    outline: none;
    border: 1px solid #1A2C3C;
    margin-bottom: 30px;
  }
}

button {
  height: 50px;
  background: #1A2C3C;
  border: 0;
  width: 100%;
  color: #fff;
  margin-bottom: 10px;
}

span {
  font-size: 14px;
}
</style>