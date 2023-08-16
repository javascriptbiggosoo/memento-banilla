import Todo from "../../ToDo/ToDo.js";
import Setting from "../../Setting/Setting.js";

class Bottom {
  constructor({ $target }) {
    this.$bottom = document.createElement("footer");
    $target.append(this.$bottom);

    this.setting = new Setting({ $target: this.$bottom });
    this.todo = new Todo({ $target: this.$bottom });
  }
}

export default Bottom;
