import TodoList from "../TodoList/TodoList.js";

class Footer {
  constructor({ $target }) {
    this.todoList = new TodoList({ $target });
  }
}

export default Footer;
