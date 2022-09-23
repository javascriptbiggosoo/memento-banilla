import UserNameInput from "./UserNameInput.js";
import GreetingMessage from "./GreetingMessage.js";

class Greeting {
  #userName = "";
  constructor({ $target }) {
    this.$greeting = document.createElement("section");

    this.$greeting.innerText = `안녕하세요${
      this.#userName && this.#userName + ` 님`
    }!`;

    this.$greetingMessage = new GreetingMessage({
      $target,
      userName: this.#userName,
    });
    this.$userNameInput = new UserNameInput({
      $target: this.$greeting,
      onSubmit: this.handleSubmit,
    });

    $target.append(this.$greeting);
  }
  handleSubmit = (ev) => {
    ev.preventDefault();
    const $input = ev.target;
    this.#userName = $input.value;
  };
  setUserName = (submittedName) => {
    this.#userName = submittedName;
  };
}

export default Greeting;
