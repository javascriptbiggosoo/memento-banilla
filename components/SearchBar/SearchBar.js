class SearchBar {
  $searchForm = document.createElement("form");
  $searchInput = document.createElement("input");
  constructor({ $target }) {
    this.$searchInput.placeholder = "검색 엔진";

    this.$searchForm.append(this.$searchInput);
    $target.append(this.$searchForm);
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
