import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tasks: [],
    taksWithFilter: [],
    filter: false
  },
  getters: {
    sortedTaks (state) {
      let sortedArray
      if (state.filter) {
        sortedArray = [...state.taksWithFilter]
      } else {
        sortedArray = [...state.tasks]
      }

      return sortedArray.sort((previous, next) => {
        if (previous.title > next.title) return 1
        else if (previous.title < next.title) return -1
        return 0
      })
    }
  },
  mutations: {
    addTask (store, {task}) {
      store.tasks.push(task)
      task.id = store.tasks.indexOf(task)
    },
    changeTaskStatus (store, {task}) {
      task.completed = !task.completed
    },
    deleteTask (store, {deletedTask}) {
      console.log(deletedTask)
      store.tasks = store.tasks.filter(task => task.id !== deletedTask.id)
    },
    filter (store, {filterName}) {
      let proceduresList = {
        onlyCompleted (tasks) {
          return tasks.filter(task => task.completed)
        },
        onlyNotCompleted (tasks) {
          return tasks.filter(task => !task.completed)
        }
      }
      store.filter = true
      store.taksWithFilter = proceduresList[filterName](store.tasks)
    }
  }
})
export default store
