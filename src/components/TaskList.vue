<template>
<ul class="todoList">
 <li v-for="(todo,index) in sortTodoList" :key="index">
   <input class="toggle" type="checkbox" @click="changeTaskStatus(todo)" >
   <span v-if="todo.completed" ><del>{{ todo.title }}</del></span>
   <span v-else>{{todo.title}}</span>
 </li>
</ul>
</template>

<script>
export default {
  props: ['todoList'],
  methods: {
    changeTaskStatus (task) {
      task.completed = !task.completed
    }
  },
  computed: {
    sortTodoList () {
      let sortedList = this.todoList.slice()
      console.log(sortedList)
      return sortedList.sort((a, b) => {
        if (a.title > b.title) return 1
        else if (a.title < b.title) return -1
        return 0
      })
    }
  }
}
</script>

<style>
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

</style>
