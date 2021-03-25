<template>
  <section class="spacer">
    <v-container>
      <div class="task-list">
        <div class="task">
          <div class="task__top">
            <div class="task__top-wrapper">
              <div class="task__checkbox">
                <label for="check">
                  <input type="checkbox" id="check">
                </label>
              </div>
              <div class="task__title">
                Completion and design approval
              </div>
            </div>
            <div class="task__remove">
              <img src="../assets/images/svg/trash.svg" alt="trash">
            </div>
          </div>
          <div class="task__bottom hidden">
            <div class="task__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div class="task__date">
              <div class="task__date-due">
                Due date:
              </div>
              <div class="task__date-from">
                12 Feb — 13 March
              </div>
            </div>
          </div>
        </div>
        <div class="task">
          <div class="task__top">
            <div class="task__top-wrapper">
              <div class="task__checkbox">
                <label for="check1">
                  <input type="checkbox" id="check1">
                </label>
              </div>
              <div class="task__title">
                Completion and design approval
              </div>
            </div>
            <div class="task__remove">
              <img src="../assets/images/svg/trash.svg" alt="trash">
            </div>
          </div>
          <div class="task__bottom hidden">
            <div class="task__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div class="task__date">
              <div class="task__date-due">
                Due date:
              </div>
              <div class="task__date-from">
                12 Feb — 13 March
              </div>
            </div>
          </div>
        </div>
        <div class="task">
          <input class="task__last" placeholder="Add task..."/>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
import vContainer from "@/components/Container"

export default {
  name: "TaskList",
  components: {
    vContainer
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}

// Task

.hidden {
  position: absolute;
  visibility: hidden;
}

.task {
  padding: 15px 30px;
  border-top: 1px solid #EDEDED;
}

.task__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  margin-top: 15px;
  margin-left: 27px;
  line-height: 140%;
  font-size: 16px;
}

.task__date {
  margin-left: 27px;
  margin-top: 15px;
  display: flex;
  font-size: 16px;
  align-items: center;
}

.task__date-due {
  color: #1A2C3B;
  margin-right: 15px;
}

.task__last {
  margin-left: 27px;
}

.task__last {
  background: transparent;
  font-size: 18px;
  outline: none;
  width: 100%;
  display: block;
  border: none;
}
</style>