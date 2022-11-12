class UserNameInput {
  $userNameInput = document.createElement("input");

  constructor({ $target, onSubmit }) {
    this.$userNameInput.placeholder = "이름을 알려주세요.";
    this.$userNameInput.classList.add("user-name-input");
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
