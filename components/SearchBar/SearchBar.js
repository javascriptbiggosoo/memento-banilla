class SearchBar {
  $searchInput = document.createElement("input");
  constructor({ $target }) {
    this.$searchInput.placeholder = "검색 엔진";

    $target.append(this.$searchInput);
    this.$searchInput.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter") {
        let searchValue = ev.target.value;
        window.open(`https://google.com/search?q=${searchValue}`);
        searchValue = "";
      }
    });
  }
}

export default SearchBar;
