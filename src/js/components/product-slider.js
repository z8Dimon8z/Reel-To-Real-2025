import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import vars from "../_vars.js";

Swiper.use([Pagination]);

if (vars.productSlider) {
  const swiper = new Swiper(vars.productSlider, {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".product-hero__pag",
      clickable: true
    },
  });
}


