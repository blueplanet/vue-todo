const app = new Vue({
  data: {
    newTodo: '',
    todos: []
  },
  methods: {
    addTodo: function() {
      let value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return
      }

      this.todos.push({
        title: value,
        compeleted: false
      })

      this.newTodo = ''
    }
  }
});

app.$mount('#todo-app')
