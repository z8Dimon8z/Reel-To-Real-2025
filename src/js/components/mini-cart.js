import { disableScroll } from "../functions/disable-scroll.js";
import { enableScroll } from "../functions/enable-scroll.js";
import { closeAllPopups } from "../functions/closeAllPopups.js";
import vars from "../_vars.js";

if (vars.miniCart) {
  vars.miniCartBtn.addEventListener("click", () => {
    closeAllPopups();

    vars.miniCart.classList.add("mini-cart--active");
    vars.overlay.classList.add("overlay--visible");

    disableScroll();
  });

  vars.miniCartBtnMobile.addEventListener("click", () => {
    closeAllPopups();

    vars.miniCartBtnMobile.classList.add('mobile-menu__btn--active');
    vars.miniCart.classList.add("mini-cart--active");
    vars.overlay.classList.add("overlay--visible");

    disableScroll();
  });

  vars.miniCartClose.addEventListener("click", () => {
    vars.miniCart.classList.remove("mini-cart--active");
    vars.overlay.classList.remove("overlay--visible");
    vars.miniCartBtnMobile.classList.remove("mobile-menu__btn--active");

    enableScroll();
  });
}
