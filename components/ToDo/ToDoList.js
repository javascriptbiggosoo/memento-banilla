class TodoList {
  $todoList = document.createElement("div");

  constructor({ $target, initialToDos }) {
    this.toDos = initialToDos;
    $target.append(this.$todoList);
    if (!Array.isArray(initialToDos)) {
      throw new Error();
    }
    if (initialToDos.length === 0) {
      return;
    }

    this.render();
  }

  render = () => {
    this.$todoList.innerHTML = `<ul>${this.toDos
      .map(({ 할일, 완료여부 }) => {
        return `<li>${할일}</li>`;
      })
      .join("")}</ul>`;
  };
  setToDos = (nextToDos) => {
    this.toDos = nextToDos;
    this.render();
  };
}

export default TodoList;
