import TodoInput from "./ToDoInput.js";
import TodoList from "./ToDoList.js";
import TodoCount from "./ToDoCounter.js";

class Todo {
  #toDos = [];

  constructor({ $target }) {
    this.$toDoInput = new TodoInput({
      $target,
      onSubmit: this.handleSubmit,
    });
    this.$toDoList = new TodoList({
      $target,
      initialToDos: this.#toDos,
    });
    this.$toDoCount = new TodoCount({
      $target,
    });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const 할일 = ev.target.querySelector("input").value;
    this.setToDos(할일);
  };

  setToDos = (nextToDos) => {
    this.#toDos = [
      ...this.#toDos,
      {
        할일: nextToDos,
        완료여부: false,
      },
    ];
    console.log(this.#toDos);

    this.$toDoList.setToDos(this.#toDos);
  };
}

export default Todo;
