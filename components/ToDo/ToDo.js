import TodoInput from "./ToDoInput.js";
import TodoList from "./ToDoList.js";

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
  }

  handleToDoClick = (toDoIdx) => {
    const nextState = this.#toDos;
    nextState[toDoIdx].완료여부 = true;
    this.setToDos(this.#toDos);
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const 할일 = ev.target.querySelector("input").value;
    const nextToDos = [...this.#toDos, { 할일, 완료여부: false }];
    this.setToDos(nextToDos);
  };

  setToDos = (nextToDos) => {
    this.#toDos = nextToDos;
    // console.log(this.#toDos);

    this.$toDoList.setToDos(this.#toDos);
  };
}

export default Todo;
