import vars from "../_vars.js";

if (vars.shopsTabsContents.length) {
  vars.shopsTabsBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tab = e.currentTarget.dataset.tab;

      vars.shopsTabsBtns.forEach(btn => { btn.classList.remove("shops-content__button--active"); });
      e.currentTarget.classList.add("shops-content__button--active");

      vars.shopsTabsContents.forEach((btn) => {
        btn.classList.remove("shops-content__tab-mob--active");
      });

      document
        .querySelector(`.shops-content__tab-mob[data-target="${tab}"]`)
        .classList.add("shops-content__tab-mob--active");
    });
  });
}
