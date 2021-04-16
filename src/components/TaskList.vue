<template>
  <section class="spacer">
    <v-container>
      <div class="task-list spacer">
        <v-task v-for="item in getTodos" :item="item" :key="item.id" :removeTodo="removeTodo"/>
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
import {mapActions, mapGetters} from "vuex";

export default {
  name: "TaskList",
  components: {
    vContainer,
    vTask,
  },
  data: () => ({
    title: ""
  }),
  computed: {
    ...mapGetters(['getTodos'])
  },
  methods: {
    ...mapActions(["fetchTodos", "removeTodo", "createTodo"]),
    createTask() {
      if (this.title.length) {
        this.createTodo({
          id: uuid.v4(),
          title: this.title,
          description: "",
          dateFrom: "",
          dateTo: "",
          completed: false
        })
        this.title = ""
        this.description = ""
        this.dateFrom = ""
        this.dateTo = ""
      }
    },
  },
  mounted() {
    this.fetchTodos()
  }
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