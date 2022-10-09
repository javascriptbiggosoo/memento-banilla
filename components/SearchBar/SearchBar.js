import SearchInput from "./SearchInput.js";
import ChooseSearchEngine from "./ChooseSearchEngine.js";

class SearchBar {
  $searchForm = document.createElement("form");

  constructor({ $target }) {
    this.$searchInput = new SearchInput({ $target: this.$searchForm });
    this.$chooseSearchEngein = new ChooseSearchEngine({
      $target: this.$searchForm,
    });

    $target.append(this.$searchForm);
  }
}

export default SearchBar;
