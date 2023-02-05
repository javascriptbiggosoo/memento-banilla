import UserNameInput from "./UserNameInput.js";
import GreetingMessage from "./GreetingMessage.js";
import { getItem, setItem } from "../../localStorage.js";

class Greeting {
  #userName = getItem("userName", "");
  isNameChanging = this.#userName ? false : true;

  $greeting = document.createElement("section");
  $userNameChangeButton = document.createElement("button");

  constructor({ $target }) {
    this.$greetingMessage = new GreetingMessage({
      $target,
      userName: this.#userName,
    });
    this.$userNameInput = new UserNameInput({
      $target: this.$greeting,
      onSubmit: this.handleNameChange,
      isNameChanging: this.isNameChanging,
    });

    this.$userNameChangeButton.innerText = "";
    if (this.isNameChanging) {
      this.$userNameChangeButton.hidden = true;
    } else {
      this.$userNameInput.$userNameInput.hidden = true;
    }
    this.$userNameChangeButton.addEventListener("click", (ev) => {
      this.$userNameChangeButton.hidden = true;
      this.$userNameInput.$userNameInput.hidden = false;
    });
    this.$greeting.append(this.$userNameChangeButton);

    $target.append(this.$greeting);
  }

  handleNameChange = (submittedName) => {
    this.setUserName(submittedName);
    this.$userNameChangeButton.hidden = false;
  };

  setUserName = (submittedName) => {
    this.#userName = submittedName;
    setItem("userName", this.#userName);

    this.$greetingMessage.setUserName(this.#userName);
  };
}

export default Greeting;
