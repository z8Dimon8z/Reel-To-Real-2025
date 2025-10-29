import vars from "../_vars.js";

export const closeAllPopups = () => {
  vars.megamenus.forEach((megamenu) => {
    megamenu.classList.remove("megamenu--visible");
  });

  document.querySelectorAll(".mobile-menu__btn").forEach(el => { el.classList.remove("mobile-menu__btn--active");});
  vars.miniCart.classList.remove("mini-cart--active");
  vars.overlay.classList.remove("overlay--visible");
  vars.searchResult.classList.remove("search-result--visible");
  vars.headerBtns.forEach(btn => { btn.classList.remove('header-btn--active')} );
};
