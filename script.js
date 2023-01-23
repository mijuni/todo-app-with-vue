Vue.createApp({
  data() {
    return {
      text: "",
      todos: [
        {
          id: 1,
          description: "Learn HTML",
          done: false,
        },
        {
          id: 2,
          description: "Learn CSS",
          done: false,
        },
      ],
    };
  },
  methods: {
    addNewTodo() {
      if (this.text.length > 0) {
        this.todos.push({
          id:
            this.text.toLowerCase().replaceAll(" ", "") +
            Math.floor(Math.random() * 100000),
          description: this.text,
          done: false,
        });
        this.text = "";
      }
    },
    deleteDoneTodos() {
      this.todos = this.todos.filter((todo) => !todo.done);
    },
  },
  computed: {
    isDisabled() {
      return this.text.length === 0;
    },
  },
}).mount("#app");
