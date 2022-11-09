import Clock from "../../Clock/Clock.js";
import Greeting from "../../Greeting/Greeting.js";

class Main {
  $main = document.createElement("main");

  constructor({ $target }) {
    $target.append(this.$main);

    this.clock = new Clock({ $target: this.$main });
    this.Greeting = new Greeting({ $target: this.$main });

    this.$main.addEventListener("hover", this.handleHover);
  }
}

export default Main;
