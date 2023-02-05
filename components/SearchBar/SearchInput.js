class SearchInput {
  $searchInput = document.createElement("input");
  searchEngine = "Google";

  constructor({ $target }) {
    this.$searchInput.placeholder = "Google";

    this.$searchInput.addEventListener("keydown", this.handleEnter);

    $target.append(this.$searchInput);
  }

  handleEnter(ev) {
    if (ev.key === "Enter") {
      let searchValue = ev.target.value;
      window.open(`https://google.com/search?q=${searchValue}`);
      searchValue = "";
    }
  }
}

export default SearchInput;
