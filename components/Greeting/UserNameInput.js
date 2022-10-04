class UserNameInput {
  $userNameInput = document.createElement("input");
  constructor({ $target, onSubmit }) {
    this.$userNameInput.placeholder = "이름을 입력해줘잉";
    this.$userNameInput.classList.add("user-name-input");
    // TODO: validation check
    this.$userNameInput.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter") {
        const submittedName = ev.target.value;
        if (submittedName) {
          onSubmit(submittedName);

          this.$userNameInput.remove();
        }
      }
    });
    $target.append(this.$userNameInput);
  }
}

export default UserNameInput;
