import { disableScroll } from "../functions/disable-scroll.js";
import { enableScroll } from "../functions/enable-scroll.js";
import { closeAllPopups } from "../functions/closeAllPopups.js";
import vars from "../_vars.js";

if (vars.megamenus.length) {
  vars.catalogBtnMobile.addEventListener('click', (e) => {
    const isMenuVisible =
      vars.catalogMenu.classList.contains("megamenu--visible");

    closeAllPopups();

    if (!isMenuVisible) {
      disableScroll();
      vars.catalogMenu.classList.add("megamenu--visible");
      e.currentTarget.classList.add("mobile-menu__btn--active");
    } else {
      enableScroll();
      vars.catalogMenu.classList.remove("megamenu--visible");
      e.currentTarget.classList.remove("mobile-menu__btn--active");
    }
  });

  vars.headerBtns.forEach((btn) => {
    if (btn.classList.contains("header__catalog")) {
      btn.addEventListener("click", (e) => {
        const isMenuVisible = vars.catalogMenu.classList.contains("megamenu--visible");

        closeAllPopups();

        if (!isMenuVisible) {
          disableScroll();
          vars.catalogMenu.classList.add("megamenu--visible");
          e.currentTarget.classList.add("header-btn--active");
        } else {
          enableScroll();
          vars.catalogMenu.classList.remove("megamenu--visible");
          e.currentTarget.classList.remove("header-btn--active");
        }
      });
    }

    if (btn.classList.contains("header__collections")) {
      btn.addEventListener("click", (e) => {
        const isMenuVisible = vars.collectionsMenu.classList.contains("megamenu--visible");

        closeAllPopups();

        if (!isMenuVisible) {
          disableScroll();
          vars.collectionsMenu.classList.add("megamenu--visible");
          e.currentTarget.classList.add("header-btn--active");
        } else {
          enableScroll();
          vars.collectionsMenu.classList.remove("megamenu--visible");
          e.currentTarget.classList.remove("header-btn--active");
        }
      });
    }
  });
}
