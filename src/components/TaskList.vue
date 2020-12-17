<template>
  <section>
    <ul class="todoList">
      <li v-for="(todo,index) in sortTodoList" :key="index">
        <input class="toggle" :value="todo.completed" type="checkbox" :checked="todo.completed" @click="changeTaskStatus(todo)" >
        <span v-if="todo.completed" ><del>{{ todo.title }}</del></span>
        <span v-else>{{todo.title}}</span>
        <span class="close" @click="deleteTask(todo)">X</span>
      </li>
    </ul>
    <div class="filterArea">
      <button class="filter">
        Mostrar todos
      </button>
      <button class="filter">
        Mostrar pendentes
      </button>
      <button class="filter "  @click="setFilter('onlyCompleted')">
        Mostrar completas
      </button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    changeTaskStatus (task) {
      this.$store.commit('changeTaskStatus', {task})
    },
    deleteTask (deletedTask) {
      this.$store.commit('deleteTask', {deletedTask})
    },
    setFilter (filterName) {
      this.$store.commit('filter', {filterName})
    }
  },
  computed: {
    sortTodoList () {
      return this.$store.getters.sortedTaks
    }
  }
}
</script>

<style>
.filterArea {
  background-color:#FFF;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
}
button.filter {
  outline: none;
  appearance: none;
  border:none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  background-color:#FFF;
  padding:5px 10px;
  cursor: pointer;
  transition: all 0.15s ease-in;
  border-radius: 4px;
}
button.filter:hover {
  background-color:#6665dd;
  color:#FFF;
}
.todoList {
  list-style: none;
  background-color:#FFF;
  z-index: 10;
}
.todoList li {
  display: block;
  padding: 20px 40px;
}
.todoList  li .toggle {
  margin-right: 10px;
}
.close {
  display: none;
  cursor: pointer;
}
.todoList  li:hover .close {
  display: inline-block;
}

</style>
