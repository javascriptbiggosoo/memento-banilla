import TodoInput from "./ToDoInput.js";
import TodoList from "./ToDoList.js";
import TodoCount from "./ToDoCounter.js";

class Todo {
  #toDos = [
    {
      할일: "",
      완료여부: false,
    },
  ];

  constructor({ $target }) {
    this.$todoInput = new TodoInput({
      $target,
      onSubmit: this.handleSubmit,
    });
    this.$toDoList = new TodoList({
      $target,
      toDos: this.#toDos,
    });
    this.$toDoCount = new TodoCount({
      $target,
    });
  }

  handleSubmit = () => {};

  setToDos = (nextToDos) => {
    this.#toDos = nextToDos;
  };
}

export default Todo;
