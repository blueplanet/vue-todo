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
        compeleted: false,
        newTask: '',
        subTasks: []
      });

      this.newTodo = ''
    },
    deleteTodo: function(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
    addTask: function(todo) {
      let value = todo.newTask;
      if (!value) {
        return
      }

      todo.subTasks.push({
        title: value,
        compeleted: false
      });

      todo.newTask = ''
    }
  },
  computed: {
    subTaskCount: function() {
      let count = 0;
      this.todos.forEach(function(todo) {
        count += todo.subTasks.length;
      });

      return count;
    }
  }
});

app.$mount('#todo-app')
