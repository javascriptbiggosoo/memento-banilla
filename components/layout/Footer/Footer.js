import Todo from "../../ToDo/ToDo.js";
import Setting from "../../Setting/Setting.js";

class Footer {
  constructor({ $target }) {
    this.$footer = document.createElement("footer");
    $target.append(this.$footer);

    this.setting = new Setting({ $target: this.$footer });
    this.todo = new Todo({ $target: this.$footer });
  }
}

export default Footer;
