import { disableScroll } from "../functions/disable-scroll.js";
import { enableScroll } from "../functions/enable-scroll.js";
import { closeAllPopups } from "../functions/closeAllPopups.js";
import vars from "../_vars.js";

if (vars.search) {
  const searchInput = vars.search.querySelector(".header-search__input");

  searchInput.addEventListener("input", (e) => {
    closeAllPopups();

    if (e.currentTarget.value.length > 0) {
      disableScroll();
      vars.searchResult.classList.add("search-result--visible");
    } else {
      enableScroll();
      vars.searchResult.classList.remove("search-result--visible");
    }
  });
}
