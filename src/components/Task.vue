<template>
  <div class="task">
    <div class="task__top">
      <div class="task__top-wrapper">
        <div class="task__checkbox">
          <input :id="`id__${item.id}`"
                 class="custom-checkbox"
                 type="checkbox"
                 @click="updateTodo({...item, completed: !item.completed})"
                 v-model="item.completed"/>
          <label :for="`id__${item.id}`"></label>
        </div>
        <label>
          <input v-model="item.taskName"
                 @change="updateTodo({...item, taskName: item.taskName})"
                 class="task__title"
                 :disabled="item.completed"
                 :class="{'completed': item.completed}"/>
        </label>
      </div>
      <div class="task__buttons">
        <div class="task__remove" @click="removeTodo(item.id)">
          <img src="../assets/images/svg/trash.svg" alt="trash">
        </div>
        <div class="task__open" @click="toggleHidden" :class="{'open--arrow': hidden}">
          <img src="../assets/images/svg/arrow-down.svg" alt="open">
        </div>
      </div>
    </div>
    <div class="task__bottom" :class="{'task--hidden': hidden}">
      <label>
        <textarea v-model="item.taskDescription"
                  @change="updateTodo({...item, taskDescription: item.taskDescription})"
                  class="task__description"
                  rows="5"
                  :disabled="item.completed">
          {{ item.taskDescription }}
        </textarea>
      </label>
      <div class="task__date">
        <div class="task__date-due">
          Due date:
        </div>
        <div class="task__date-from">
          {{ formattedCreateData }} — {{ formattedDueDate }}
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import {mapActions} from "vuex";
export default {
  name: "Task",
  props: ["item", "removeTodo"],
  data: () => ({
    hidden: true,
    create: new Date()
  }),
  computed: {
    formattedCreateData() {
      if(!this.item.createDate) {
        return "Не задано"
      }
      return new Date(this.item.createDate).toLocaleDateString()
    },
    formattedDueDate() {
      if(!this.item.dueDate) {
        return "Не задано"
      }
      return new Date(this.item.dueDate).toLocaleDateString()
    },
  },
  methods: {
    ...mapActions(["updateTodo"]),
    toggleHidden() {
      this.hidden = !this.hidden
    }
  }
}
</script>

<style scoped lang="scss">
.task--hidden {
  position: fixed;
  visibility: hidden;
  height: 0;
  width: 0;
}

.completed {
  text-decoration: line-through;
}

.arrow--open {
  transform: rotate(90deg);
}

.task {
  border-top: 1px solid #EDEDED;
}

.task__top {
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task__bottom {
  margin: 0 30px 15px 30px;
}

.task__top-wrapper {
  display: flex;
  align-items: center;
}

.task__title {
  width: 300px;
  margin-left: 10px;
  font-size: 18px;
  line-height: 120%;
  color: #1A2C3C;
  background: transparent;
  outline: none;
  border: none;

  &::placeholder {
    color: #1A2C3C;
  }
}

.task__checkbox {
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}

.custom-checkbox + label::before {
  content: '';
  display: inline-block;
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #626262;
  border-radius: 118px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.custom-checkbox:checked + label::before {
  border-color: transparent;
  background-color: #62B620;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

.task__description {
  line-height: 140%;
  font-size: 16px;
  width: 100%;
  border: 1px solid #EDEDED;
  border-radius: 5px;
  padding: 15px 26px;
  resize: none;

  &:focus {
    outline: none;
    border-color: #1A2C3C;
  }
}

.task__date {
  margin-left: 25px;
  margin-top: 15px;
  display: flex;
  font-size: 16px;
  align-items: center;
}

.task__date-due {
  color: #1A2C3B;
  margin-right: 15px;
}

.task__remove {
  margin-right: 10px;
}

.task__buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    display: block;
    cursor: pointer;
  }
}


</style>