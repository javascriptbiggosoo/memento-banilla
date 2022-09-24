class GreetingMessage {
  #userName;
  $greetingMessage = document.createElement("div");
  constructor({ $target, userName }) {
    this.#userName = userName;

    $target.append(this.$greetingMessage);
    this.render();
  }
  setUserName = (submittedName) => {
    this.#userName = submittedName;
    this.render();
  };
  render = () => {
    this.$greetingMessage.innerText = `안녕하세요${
      this.#userName && ` ${this.#userName}님`
    }!`;
  };
}

export default GreetingMessage;
