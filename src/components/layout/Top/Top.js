import SearchBar from "../../SearchBar/SearchBar.js";
import Weather from "../../Weather/Weather.js";

class Top {
  constructor({ $target }) {
    this.$top = document.createElement("header");
    $target.append(this.$top);

    this.$searchBar = new SearchBar({ $target: this.$top });
    this.$weather = new Weather({ $target: this.$top });
  }
}

export default Top;
