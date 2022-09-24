class TodoInput {
  $form = document.createElement("form");
  $input = document.createElement("input");

  constructor({ $target, onSubmit }) {
    this.onSubmit = onSubmit;

    this.$input.placeholder = "새 할일";

    this.$form.addEventListener("submit", this.handleSubmit.bind(this));

    this.$form.append(this.$input);
    $target.append(this.$form);
  }
  handleSubmit = (ev) => {
    ev.preventDefault();
    const 할일 = this.$input.value;

    this.onSubmit(할일);

    this.$input.value = "";
  };
}

export default TodoInput;
