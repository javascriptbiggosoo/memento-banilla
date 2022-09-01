class TodoInput {
  constructor({ $target }) {
    this.$form = document.createElement("form");
    $target.append(this.$form);

    this.$input = document.createElement("input");
    this.$button = document.createElement("button");
    this.$input.placeholder = "새 할일";
    this.$button.innerText = "새 할일";
    this.$form.append(this.$input);
    this.$form.append(this.$button);
  }
}

export default TodoInput;
