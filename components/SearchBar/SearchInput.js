class SearchInput {
  $searchInput = document.createElement("input");
  searchEngine = "Google";

  constructor({ $target }) {
    this.$searchInput.placeholder = "Google";

    this.$searchInput.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter") {
        let searchValue = ev.target.value;
        window.open(`https://google.com/search?q=${searchValue}`);
        searchValue = "";
      }
    });

    $target.append(this.$searchInput);
  }
}

export default SearchInput;
