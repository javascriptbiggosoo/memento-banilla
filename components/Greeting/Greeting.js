import UserNameInput from "./UserNameInput.js";
import GreetingMessage from "./GreetingMessage.js";

class Greeting {
  #userName = "";
  $greeting = document.createElement("section");

  constructor({ $target }) {
    this.$greetingMessage = new GreetingMessage({
      $target,
      userName: this.#userName,
    });
    this.$userNameInput = new UserNameInput({
      $target: this.$greeting,
      onSubmit: this.handleNameChange,
    });

    $target.append(this.$greeting);
  }

  handleNameChange = (submittedName) => {
    this.setUserName(submittedName);
  };

  setUserName = (submittedName) => {
    this.#userName = submittedName;

    this.$greetingMessage.setUserName(this.#userName);
  };
}

export default Greeting;
