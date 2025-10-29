import Swiper from "swiper";
import { Navigation, Scrollbar } from "swiper/modules";
import vars from "../_vars.js";

Swiper.use([Navigation, Scrollbar]);

if (vars.productSimilar) {
  const swiper = new Swiper(
    vars.productSimilar.querySelector(".product-similar__slider"),
    {
      slidesPerView: 2,
      spaceBetween: 0,
      loop: true,
      scrollbar: {
        el: vars.productSimilar.querySelector(".product-similar__scrollbar"),
        draggable: true,
      },
      navigation: {
        prevEl: vars.productSimilar.querySelector(
          ".product-similar__slider-btn--prev"
        ),
        nextEl: vars.productSimilar.querySelector(
          ".product-similar__slider-btn--next"
        ),
      },
      breakpoints: {
        769: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1025: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1281: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
    }
  );
}
