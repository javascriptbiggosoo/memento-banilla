class SearchBar {
  $searchForm = document.createElement("form");
  $searchInput = document.createElement("input");
  constructor({ $target }) {
    this.$searchInput.placeholder = "Google";

    this.$searchForm.append(this.$searchInput);
    $target.append(this.$searchForm);

    // TODO: 검색 후 입력 창이 왜 안비워지지?
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
