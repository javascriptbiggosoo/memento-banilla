class TodoList {
  $toDoList = document.createElement("div");
  #toDos;

  // TODO: event delegation으로 to do 완료하기
  constructor({ $target, initialToDos }) {
    $target.append(this.$toDoList);
    this.#toDos = initialToDos;

    this.render();
    this.$toDoList.addEventListener(
      "click",
      this.handleToDoListClick.bind(this)
    );
  }
  handleToDoListClick = (ev) => {
    const $li = ev.target.closest("li");
    console.log($li);
  };
  render = () => {
    this.$toDoList.innerHTML = `<ul>${this.#toDos
      .map(({ 할일 }, idx) => {
        return `<li data-id="${idx}">${할일}</li>`;
      })
      .join("")}</ul>`;
  };
  setToDos = (nextToDos) => {
    this.#toDos = nextToDos;

    this.render();
  };
}

export default TodoList;
