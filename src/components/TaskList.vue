<template>
  <section class="spacer">
    <v-container>
      <div class="task-list spacer">
        <v-task v-for="item in todos" :item="item" :key="item.id" :removeTodo="removeTodo"/>
        <form class="controls" @submit.prevent="createTask">
          <label>
            <input class="controls__control" v-model="title" placeholder="Add title..."/>
          </label>
        </form>
      </div>
    </v-container>
  </section>
</template>

<script>
import vContainer from "@/components/Container"
import vTask from "@/components/Task"
import {uuid} from 'vue-uuid'

export default {
  name: "TaskList",
  components: {
    vContainer,
    vTask,
  },
  data: () => ({
    date: new Date(),
    todos: [
      {
        id: 1,
        title: "Completion and design approval",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        dateFrom: "12 Feb",
        dateTo: "13 March",
      },
      {
        id: 2,
        title: "Why do we use it?",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        dateFrom: "11 Feb",
        dateTo: "12 Feb",
      }
    ],
    title: "",
    description: "",
    dateFrom: "",
    dateTo: "",
  }),
  methods: {
    createTask() {
      if (this.title.length) {
        this.todos.push({
          id: uuid.v4(),
          title: this.title,
          description: this.description,
          dateFrom: this.dateFrom,
          dateTo: this.dateTo
        })
        this.title = ""
        this.description = ""
        this.dateFrom = ""
        this.dateTo = ""
      }
    },
    removeTodo(idx) {
      this.todos = this.todos.filter(item => item.id !== idx)
    }
  },

}
</script>

<style scoped lang="scss">
.controls {
  border-top: 1px solid #EDEDED;
}

.task-list {
  margin-bottom: 60px;
}

.controls__control {
  padding: 15px 30px;
  background: transparent;
  font-size: 18px;
  outline: none;
  width: 100%;
  display: block;
  border: none;
  line-height: 120%;
  color: #1A2C3C;
  margin-left: 23px;

  &::placeholder {
    color: #8E8E8E;
  }
}
</style>