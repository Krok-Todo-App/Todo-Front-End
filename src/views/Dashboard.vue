<template>
  <v-header/>
  <v-container>
    <h1>
      Dashboard
    </h1>
  </v-container>
</template>

<script>
import vHeader from "@/components/Header"
import vContainer from "@/components/Container"

export default {
  name: "Dashboard",
  components: {
    vHeader,
    vContainer
  },
  created() {
    if(!this.$store.state.jwt) {
      this.$router.push('/login')
    }
  },
  mounted() {
    document.title = "Todo App | Dashboard"
  }
}
</script>

<style scoped>

</style>