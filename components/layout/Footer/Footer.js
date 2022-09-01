import Todo from "../../ToDo/ToDo.js";

class Footer {
  constructor({ $target }) {
    this.$footer = document.createElement("footer");
    $target.append(this.$footer);

    this.todo = new Todo({ $target: this.$footer });
  }
}

export default Footer;
