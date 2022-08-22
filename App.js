import TodoList from "./components/TodoList/TodoList.js";

class App {
  constructor($target) {
    this.$target = $target;

    this.todoList = new TodoList({});
  }
  setState = () => {};
}

export default App;
