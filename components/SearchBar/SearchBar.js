class SearchBar {
  #state = [];
  constructor({ $target }) {
    this.$searchInput = document.createElement("input");
    this.$searchInput.placeholder = "검색 엔진";

    $target.append(this.$searchInput);
  }

  setState = (nextState) => {
    this.#state = nextState;
  };
}

export default SearchBar;
