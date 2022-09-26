class UserNameInput {
  $userNameInput = document.createElement("input");
  constructor({ $target, onSubmit }) {
    this.$userNameInput.placeholder = "이름을 입력해줘잉";
    this.$userNameInput.classList.add("user-name-input");
    // TODO: validation check
    this.$userNameInput.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter") {
        const submittedName = ev.target.value;
        onSubmit(submittedName);
        console.log(ev.target.value);
        // TODO: 이름 입력받은 후 지워지도록 하자
      }
    });
    $target.append(this.$userNameInput);
  }
}

export default UserNameInput;
