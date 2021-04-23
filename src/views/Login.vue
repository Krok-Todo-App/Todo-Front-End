<template>
  <div class="centered">
    <h3>Login</h3>
    <form @submit.prevent="auth">
      <div class="form-controls">
        <input v-model="email" type="email" placeholder="Введите ваш email">
        <input v-model="password" type="password" placeholder="Введите ваш пароль">
      </div>
      <button type="submit">Авторизоваться</button>
      <span>
        Нет аккаунта? <router-link to="/register" exact>Зарегистроваться</router-link>
      </span>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data: () => ({
    email: "",
    password: ""
  }),
  mounted() {
    document.title = "Todo App | Авторизоваться"
  },
  created() {
    if(this.$store.state.jwt) {
      this.$router.push('/')
    }
  },
  methods: {
    async auth() {
      if(this.email.length && this.password.length) {
        const result = await this.$store.dispatch("login", {email: this.email, password: this.password})
        if(result) {
          await this.$router.push('/')
        }
      }
    }
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