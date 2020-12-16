<template>
  <div class="input">
    <input
      @keyup.enter="addTask"
      type="text"
      v-model="newTodoText"
      placeholder="Digite a tarefa que deseja salvar"
    />
  </div>
</template>

<script>
import { Task } from '../models/Task'
export default {
  name: 'inputTask',
  data () {
    return {
      newTodoText: ''
    }
  },
  methods: {
    addTask () {
      let task = new Task()
      task.completed = false
      task.title = this.newTodoText
      this.$emit('newTask', task)
      this.clearInput()
    },
    clearInput () {
      this.newTodoText = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input {
  margin-top: 15px;
}
.input input {
  width: 100%;
  font-size: 24px;
  outline: none;
  line-height: 1.4em;
  border: none;
  padding: 20px 40px;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}
</style>
