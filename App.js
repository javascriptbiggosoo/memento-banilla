import Top from "./components/layout/Top/Top.js";
import Main from "./components/layout/Center/Center.js";
import Footer from "./components/layout/Bottom/Bottom.js";

class App {
  constructor({ $target }) {
    this.$header = new Top({ $target });
    this.$main = new Main({ $target });
    this.$footer = new Footer({ $target });

    // TODO: 배경사진 랜덤
    // TODO: 4k / FHD 배경사진
  }
}

export default App;
