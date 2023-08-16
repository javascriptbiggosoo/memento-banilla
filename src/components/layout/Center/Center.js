import Clock from "../../Clock/Clock.js";
import Greeting from "../../Greeting/Greeting.js";

class Center {
  $center = document.createElement("main");

  constructor({ $target }) {
    $target.append(this.$center);

    this.clock = new Clock({ $target: this.$center });
    this.Greeting = new Greeting({ $target: this.$center });

    this.$center.addEventListener("hover", this.handleHover);
  }
}

export default Center;
