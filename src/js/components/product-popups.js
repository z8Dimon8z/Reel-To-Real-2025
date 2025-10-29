import { disableScroll } from "../functions/disable-scroll.js";
import { enableScroll } from "../functions/enable-scroll.js";
import vars from "../_vars.js";

if (vars.productPopupsBtns.length) {
  vars.productPopupsBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const activeTab = e.currentTarget.dataset.tab;

      vars.productPopups.forEach((popup) => {
        popup.classList.remove("product-hero__popup--active");
      });
      document
        .querySelector(`.product-hero__popup[data-target="${activeTab}"]`)
        .classList.add("product-hero__popup--active");
    });
  });

  vars.productPopupClose.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      vars.productPopups.forEach((popup) => {
        popup.classList.remove("product-hero__popup--active");
      });
    });
  });
}
