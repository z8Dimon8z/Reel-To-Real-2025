import { disableScroll } from "../functions/disable-scroll.js";
import { enableScroll } from "../functions/enable-scroll.js";
import { closeAllPopups } from "../functions/closeAllPopups.js";
import SimpleBar from "simplebar";
import vars from "../_vars.js";

if (vars.catalogMobileFilters) {
  vars.catalogMobileOpenFilters.addEventListener('click', (e) => {
    vars.catalogMobileFilters.classList.add("catalog__left--mobile-visible");
  });

  vars.catalogMobileFilterClose.addEventListener("click", (e) => {
    vars.catalogMobileFilters.classList.remove("catalog__left--mobile-visible");
  });
}

if (document.querySelector(".catalog__left--mobile-fixed .catalog__wrapper") && window.innerWidth <= 1024) {
  new SimpleBar(document.querySelector(".catalog__left--mobile-fixed .catalog__wrapper"));
}
