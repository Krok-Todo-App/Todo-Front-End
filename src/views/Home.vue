<template>
  <v-header/>
  <v-task-list/>
</template>

<script>
import vHeader from "@/components/Header"
import vTaskList from "@/components/TaskList"

export default {
  components: {
    vHeader,
    vTaskList
  },
  created() {
    if(!this.$store.state.jwt) {
      this.$router.push('/login')
    }
  },
  mounted() {
    document.title = "Todo App | Home"
  }
}
</script>