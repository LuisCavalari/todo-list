<template>
  <section class="todo-app">
    <header class="header">
      <h1>Tarefas</h1>
    </header>
    <div class="container">
      <input-task />
      <task-list />
    </div>
  </section>
</template>

<script>
import inputTask from './components/InputTask'
import TaskList from './components/TaskList'
export default {
  components: {
    inputTask,
    TaskList
  },
  data () {
    return {
      tasks: []
    }
  },
  methods: {
    addTask (task) {
      this.tasks.push(task)
      task.id = this.tasks.indexOf(task)
      console.log(this.tasks)
    },
    refreshList (newList) {
      this.tasks = newList
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
html {
  height: 100vh;
  background-color: #6665dd;
}
.header {
  display: flex;
  margin-top: 45px;
  justify-content: center;
}
.header h1 {
  color: #fff;
  font-size: 48px;
}
.container {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
</style>
