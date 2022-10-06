import TodoInput from "./ToDoInput.js";
import TodoList from "./ToDoList.js";

// TODO: toDoInput에서 setItem
// TODO: toDoList에서 getItem, validation
class Todo {
  #toDos = [];

  constructor({ $target }) {
    const $toDoContainer = document.createElement("section");
    $toDoContainer.classList.add("todo-container");
    $target.append($toDoContainer);

    this.$toDoList = new TodoList({
      $target: $toDoContainer,
      initialToDos: this.#toDos,
      onToDoClick: this.handleToDoClick,
    });
    this.$toDoInput = new TodoInput({
      $target: $toDoContainer,
      onSubmit: this.handleToDoSubmit,
    });
  }

  handleToDoClick = (toDoIdx) => {
    const nextState = this.#toDos;
    nextState[toDoIdx].완료여부 = !nextState[toDoIdx].완료여부;
    this.setToDos(this.#toDos);
  };

  handleToDoSubmit = (할일) => {
    const nextToDos = [
      ...this.#toDos,
      {
        할일,
        완료여부: false,
      },
    ];
    this.setToDos(nextToDos);
  };

  setToDos = (nextToDos) => {
    this.#toDos = nextToDos;

    this.$toDoList.setToDos(this.#toDos);
  };
}

export default Todo;
