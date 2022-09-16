class TodoList {
  $toDoList = document.createElement("div");
  #toDos;

  constructor({ $target, initialToDos, onToDoClick }) {
    $target.append(this.$toDoList);
    this.#toDos = initialToDos;
    this.onToDoClick = onToDoClick;

    this.$toDoList.addEventListener(
      "click",
      this.handleToDoListClick.bind(this)
    );
    this.render();
  }

  // TODO: event delegation으로 to do 완료하기
  // TODO: 완료여부 state 변경(상위에서)
  // TODO: 완료 클래스 추가
  // TODO: 리렌더
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
