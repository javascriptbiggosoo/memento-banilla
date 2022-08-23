class TodoList {
  #state = [];
  constructor({ $target }) {
    this.$todoInput = document.createElement("input");
    $target.append(this.$todoInput);
  }
  render = () => {};

  setState = (nextState) => {
    this.#state = nextState;
  };
}

export default TodoList;
