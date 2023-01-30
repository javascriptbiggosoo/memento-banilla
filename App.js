import Top from "./components/layout/Top/Top.js";
import Main from "./components/layout/Center/Center.js";
import Bottom from "./components/layout/Bottom/Bottom.js";

// TODO: 배경사진 랜덤
// TODO: 4k / FHD 배경사진
class App {
  constructor({ $target }) {
    this.$top = new Top({ $target });
    this.$main = new Main({ $target });
    this.$bottom = new Bottom({ $target });
  }
}

export default App;
