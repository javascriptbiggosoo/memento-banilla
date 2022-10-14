import UserNameInput from "./UserNameInput.js";
import GreetingMessage from "./GreetingMessage.js";
import { getItem, setItem } from "../../localStorage.js";

class Greeting {
  #userName = getItem("userName", "");
  $greeting = document.createElement("section");

  constructor({ $target }) {
    this.$greetingMessage = new GreetingMessage({
      $target,
      userName: this.#userName,
    });
    if (!this.#userName) {
      this.$userNameInput = new UserNameInput({
        $target: this.$greeting,
        onSubmit: this.handleNameChange,
      });
    }

    $target.append(this.$greeting);
  }

  handleNameChange = (submittedName) => {
    this.setUserName(submittedName);
  };

  setUserName = (submittedName) => {
    this.#userName = submittedName;
    setItem("userName", this.#userName);

    this.$greetingMessage.setUserName(this.#userName);
  };
}

export default Greeting;
