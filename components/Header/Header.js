import SearchBar from "../SearchBar/SearchBar.js";

class Header {
  constructor({ $target }) {
    this.$header = document.createElement("header");
    $target.append(this.$header);

    this.searchBar = new SearchBar({ $target: this.$header });
  }
}

export default Header;
