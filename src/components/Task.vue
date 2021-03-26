<template>
  <div class="task">
    <div class="task__top" @click="toggleHidden">
      <div class="task__top-wrapper">
        <div class="task__checkbox">
          <label :for="`check_${item.id}`">
            <input type="checkbox" :id="`check_${item.id}`">
          </label>
        </div>
        <div class="task__title">
          {{ item.title }}
        </div>
      </div>
      <div class="task__remove" @click="removeTodo(item.id)">
        <img src="../assets/images/svg/trash.svg" alt="trash">
      </div>
    </div>
<!--    :class="{'task&#45;&#45;hidden': hidden}"-->
    <div class="task__bottom" >
      <label>
        <textarea class="task__description" rows="5">
          {{ item.description }}
        </textarea>
      </label>
      <div class="task__date">
        <div class="task__date-due">
          Due date:
        </div>
        <div class="task__date-from">
          {{ item.dateFrom }} — {{ item.dateTo }}
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Task",
  props: ["item", "removeTodo"],
  data: () => ({
    hidden: true
  }),
  methods: {
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
  padding: 0 30px 15px 30px;
}

.task__top-wrapper {
  display: flex;
  align-items: center;
}

.task__title {
  margin-left: 10px;
  font-size: 18px;
  line-height: 120%;
  color: #1A2C3C;
}

.task__checkbox {
  label {
    width: 15px;
    height: 15px;
    background: #FFFFFF;
    border: 1px solid #626262;
    box-sizing: border-box;
    border-radius: 28px;
    display: block;
  }

  input {
    display: none;
  }
}

.task__description {
  margin-left: 25px;
  line-height: 140%;
  font-size: 16px;
  width: 100%;
  border: 1px solid #7E7E7E;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 5px 15px;
  resize: none;
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
  cursor: pointer;
}


</style>