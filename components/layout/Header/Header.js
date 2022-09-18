import SearchBar from "../../SearchBar/SearchBar.js";
import Weather from "../../Weather/Weather.js";

class Header {
  constructor({ $target }) {
    this.$header = document.createElement("header");
    $target.append(this.$header);

    this.$searchBar = new SearchBar({ $target: this.$header });
    this.$weather = new Weather({ $target: this.$header });
  }
}

export default Header;
