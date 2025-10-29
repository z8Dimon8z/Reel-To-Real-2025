import vars from "../_vars.js";

if (vars.megamenus.length) {
  vars.megamenuBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const parent = e.currentTarget.closest(".megamenu");
      const target = e.currentTarget.dataset.tab;

      parent.querySelectorAll(".megamenu__btn").forEach((btn) => {
        btn.classList.remove("megamenu__btn--active");
      });
      e.currentTarget.classList.add("megamenu__btn--active");

      parent.querySelectorAll(".megamenu__content").forEach((content) => {
        content.classList.remove("megamenu__content--active");
      });
      document
        .querySelector(`.megamenu__content[data-target="${target}"]`)
        .classList.add("megamenu__content--active");

      if (window.innerWidth <= 1024) {
        setTimeout(() => {
          parent.querySelectorAll(".megamenu__content").forEach((content) => {
            content.classList.remove("megamenu__content--visible");
          });
          document
            .querySelector(`.megamenu__content[data-target="${target}"]`)
            .classList.add("megamenu__content--visible");
        }, 300);
      }
    });
  });

  vars.megamenuBacks.forEach(back => {
    back.addEventListener("click", (e) => {
      const parent = e.currentTarget.closest(".megamenu");

      parent.querySelectorAll(".megamenu__content").forEach((content) => {
        content.classList.remove("megamenu__content--visible");
      });

      setTimeout(() => {
        parent.querySelectorAll(".megamenu__content").forEach((content) => {
          content.classList.remove("megamenu__content--active");
        });
      }, 300);
    });
  });
}
