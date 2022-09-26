import Header from "./components/layout/Header/Header.js";
import Main from "./components/layout/Main/Main.js";
import Footer from "./components/layout/Footer/Footer.js";
import Wallpaper from "./components/Wallpaper/Wallpaper.js";

class App {
  constructor({ $target }) {
    this.$wallpaper = new Wallpaper({ $target });
    this.$header = new Header({ $target });
    this.$main = new Main({ $target });
    this.$footer = new Footer({ $target });
  }
}

export default App;
