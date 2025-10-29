import vars from "../_vars.js";

if (vars.catalogFilterBlocks.length) {
  vars.catalogFilterBlocks.forEach(block => {
    const btn = block.querySelector(".catalog-filter__btn");
    const inner = block.querySelector(".catalog-filter__inner");
    const isOpenInitial = block.classList.contains("catalog-filter__block--open");

    if (isOpenInitial) {
      inner.style.maxHeight = `${inner.scrollHeight}px`;
    }

    btn.setAttribute("aria-expanded", isOpenInitial ? "true" :  false);
    btn.setAttribute('aria-label', isOpenInitial ? "Закрыть блок фильтра" : "Открыть блок фильтра");

    btn.addEventListener('click', (e) => {
      block.classList.toggle("catalog-filter__block--open");

      const isOpen = block.classList.contains("catalog-filter__block--open");

      btn.setAttribute("aria-expanded", isOpen ? "true" : false);
      btn.setAttribute('aria-label', isOpen ? "Закрыть блок фильтра" : "Открыть блок фильтра");

      if (isOpen) {
        inner.style.maxHeight = `${inner.scrollHeight}px`;
      } else {
        inner.style.maxHeight = null;
      }
    });
  });
}
