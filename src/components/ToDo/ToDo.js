import { getItem, setItem } from "../../localStorage.js";
import TodoInput from "./ToDoInput.js";
import TodoList from "./ToDoList.js";

// TODO: getItem 할 때 validation
class Todo {
  #toDos = getItem("toDo", []).filter((toDo) => toDo.isCompleted === false);

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
    nextState[toDoIdx].isCompleted = !nextState[toDoIdx].isCompleted;
    this.setToDos(this.#toDos);
  };

  handleToDoSubmit = (toDo) => {
    const nextToDos = [
      ...this.#toDos,
      {
        toDo,
        isCompleted: false,
      },
    ];
    this.setToDos(nextToDos);
  };

  setToDos = (nextToDos) => {
    this.#toDos = nextToDos;
    setItem("toDo", this.#toDos);

    this.$toDoList.setToDos(this.#toDos);
  };
}

export default Todo;
