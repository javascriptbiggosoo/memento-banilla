class TodoInput {
  $form = document.createElement("form");
  $input = document.createElement("input");

  constructor({ $target, onSubmit }) {
    this.$target = $target;
    this.onSubmit = onSubmit;

    this.$input.classList.add("to-do-input");
    this.$input.placeholder = "새 할일";

    this.$form.addEventListener("submit", this.handleSubmit.bind(this));

    this.$form.append(this.$input);
    this.$target.insertAdjacentElement("afterbegin", this.$form);
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const toDo = this.$input.value;
    if (toDo) {
      this.onSubmit(toDo);

      this.$input.value = "";
    }
  };
}

export default TodoInput;
