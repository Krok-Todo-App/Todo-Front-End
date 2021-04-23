<template>
  <header>
    <div class="wrapper">
      <div class="left">
        <router-link to="/" exact>
          <img src="../assets/images/todo.png" alt="logo">
        </router-link>
        <nav>
          <router-link active-class="link-active" to="/" exact>Home</router-link>
          <router-link active-class="link-active" to="/dashboard">Dashboard</router-link>
          <router-link active-class="link-active" to="/about">About App</router-link>
        </nav>
      </div>
      <div class="exit">
        <a href="#" @click.prevent="signOut">
          Sing Out
        </a>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  margin-top: 30px;
  max-width: 100%;
  padding: 0 90px;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left {
  display: flex;
  align-items: center;
}

nav {
  margin-left: 60px;
  a {
    margin-right: 30px;
    &:last-child {
      margin-right: 0;
    }
  }
}
.link-active {
  color: #111;
  font-weight: 500;
}
</style>

<script>
export default {
  methods: {
    signOut() {
      this.$store.commit('REMOVE_JWT')
      this.$router.push('/login')
    }
  }
}
</script>