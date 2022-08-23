import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";

class App {
  #state = [];
  constructor({ $target }) {
    this.$target = $target;

    this.header = new Header({ $target });
    this.main = new Main({ $target });
    this.footer = new Footer({ $target });
  }
  setState = () => {};
}

export default App;
