import vars from "../_vars.js";

if (vars.footerTitles.length && window.innerWidth <= 768) {
  vars.footerTitles.forEach(title => {
    title.addEventListener('click', (e) => {
      const parent = e.currentTarget.parentElement;
      const footerList = parent.querySelector('.footer__list');

      vars.footerTitles.forEach(title => { title.classList.remove('footer__title--active') });

      e.currentTarget.classList.add("footer__title--active");

      document.querySelectorAll('.footer__list').forEach(list => { list.classList.remove("footer__list--visible");});

      footerList.classList.toggle('footer__list--visible');
    });
  });
}
