<template>
  <v-header/>
  <v-task-list></v-task-list>
</template>

<script>
import vHeader from "@/components/Header"
import vTaskList from "@/components/TaskList"

export default {
  components: {
    vHeader,
    vTaskList
  }
}
</script>