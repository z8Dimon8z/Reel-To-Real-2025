import vars from "../_vars.js";

if (vars.search) {
  vars.searchResultBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const parent = e.currentTarget.closest(".search-result");
      const target = e.currentTarget.dataset.tab;

      parent.querySelectorAll(".search-result__btn").forEach((btn) => {
        btn.classList.remove("search-result__btn--active");
      });
      e.currentTarget.classList.add("search-result__btn--active");

      parent.querySelectorAll(".search-result__content").forEach((content) => {
        content.classList.remove("search-result__content--active");
      });
      document
        .querySelector(`.search-result__content[data-target="${target}"]`)
        .classList.add("search-result__content--active");

      if (window.innerWidth <= 1024) {
        setTimeout(() => {
          parent
            .querySelectorAll(".search-result__content")
            .forEach((content) => {
              content.classList.remove("search-result__content--visible");
            });
          document
            .querySelector(`.search-result__content[data-target="${target}"]`)
            .classList.add("search-result__content--visible");
        }, 300);
      }
    });
  });

  vars.searchResultBacks.forEach((back) => {
    back.addEventListener("click", (e) => {
      const parent = e.currentTarget.closest(".search-result");

      parent.querySelectorAll(".search-result__content").forEach((content) => {
        content.classList.remove("search-result__content--visible");
      });

      setTimeout(() => {
        parent
          .querySelectorAll(".search-result__content")
          .forEach((content) => {
            content.classList.remove("search-result__content--active");
          });
      }, 300);
    });
  });
}
