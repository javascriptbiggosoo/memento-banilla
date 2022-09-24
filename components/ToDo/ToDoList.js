class TodoList {
  $toDoList = document.createElement("div");
  #toDos;

  constructor({ $target, initialToDos, onToDoClick }) {
    // TODO: validation check
    $target.append(this.$toDoList);
    this.#toDos = initialToDos;
    this.onToDoClick = onToDoClick;

    this.$toDoList.addEventListener(
      "click",
      this.handleToDoListClick.bind(this)
    );
    this.render();
  }

  handleToDoListClick = (ev) => {
    const $li = ev.target.closest("li");
    console.log($li);
    console.log($li.dataset.id);
    this.onToDoClick($li.dataset.id);
  };

  render = () => {
    this.$toDoList.innerHTML = `<ul>${this.#toDos
      .map(({ 할일, 완료여부 }, idx) => {
        return `<li data-id="${idx}" class="할일 ${
          완료여부 ? "할일완료" : ""
        }">${할일}</li>`;
      })
      .join("")}</ul>`;
  };

  setToDos = (nextToDos) => {
    this.#toDos = nextToDos;

    this.render();
  };
}

export default TodoList;
