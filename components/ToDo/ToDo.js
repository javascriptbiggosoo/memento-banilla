import TodoInput from "./ToDoInput.js";
import TodoList from "./ToDoList.js";
import TodoCount from "./ToDoCounter.js";

class Todo {
  #toDos = [];

  constructor({ $target }) {
    const $toDoContainer = document.createElement("div");
    $toDoContainer.classList.add("todo-container");
    $target.append($toDoContainer);

    this.$toDoList = new TodoList({
      $target: $toDoContainer,
      initialToDos: this.#toDos,
      onToDoClick: this.handleToDoClick,
    });
    this.$toDoInput = new TodoInput({
      $target: $toDoContainer,
      onSubmit: this.handleSubmit,
    });
    this.$toDoCount = new TodoCount({
      $target: $toDoContainer,
    });
  }

  handleToDoClick = () => {
    this.setToDos();
  };

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
    // console.log(this.#toDos);

    this.$toDoList.setToDos(this.#toDos);
  };
}

export default Todo;
