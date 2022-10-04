import Header from "./components/layout/Header/Header.js";
import Main from "./components/layout/Main/Main.js";
import Footer from "./components/layout/Footer/Footer.js";

class App {
  constructor({ $target }) {
    this.$header = new Header({ $target });
    this.$main = new Main({ $target });
    this.$footer = new Footer({ $target });

    // TODO: 배경사진 랜덤
    // TODO: 4k / FHD 배경사진
  }
}

export default App;
