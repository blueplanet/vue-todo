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
    },
    deleteTodo: function(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    }
  }
});

app.$mount('#todo-app')
