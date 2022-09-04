class TodoInput {
  $form = document.createElement("form");
  $input = document.createElement("input");

  constructor({ $target, onSubmit }) {
    this.$form.addEventListener("submit", onSubmit);
    this.$input.placeholder = "새 할일";

    this.$form.append(this.$input);
    $target.append(this.$form);
  }
}

export default TodoInput;
