import Clock from "../../Clock/Clock.js";
import Greeting from "../../Greeting/Greeting.js";

class Main {
  constructor({ $target }) {
    this.$main = document.createElement("main");
    $target.append(this.$main);

    this.clock = new Clock({ $target: this.$main });
    this.Greeting = new Greeting({ $target });
  }
}

export default Main;
