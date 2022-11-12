class TodoList {
  $toDoList = document.createElement("div");
  #toDos;

  constructor({ $target, initialToDos, onToDoClick }) {
    this.$target = $target;
    this.#toDos = initialToDos;
    this.onToDoClick = onToDoClick;

    this.$toDoList.addEventListener("click", this.handleToDoClick.bind(this));

    this.$target.insertAdjacentElement("beforeend", this.$toDoList);

    this.render();
  }

  handleToDoClick = (ev) => {
    const $li = ev.target.closest("li");

    this.onToDoClick($li.dataset.id);
  };

  render = () => {
    this.$toDoList.innerHTML = `<ul>${this.#toDos
      .map(({ toDo, isCompleted }, idx) => {
        return `<li data-id="${idx}" class="할일 ${
          isCompleted && "할일완료"
        }"><input type="checkbox" ${isCompleted && `checked`}> ${toDo}</li>`;
      })
      .join("")}</ul>`;
  };

  setToDos = (nextToDos) => {
    this.#toDos = nextToDos;

    this.render();
  };
}

export default TodoList;
