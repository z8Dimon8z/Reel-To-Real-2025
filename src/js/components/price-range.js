import noUiSlider from "nouislider";
import vars from "../_vars.js";

if (vars.filterPrices.length) {
  vars.filterPrices.forEach(filterPrice => {
    const priceRange = filterPrice.querySelector(".price-range");
    const priceInputMin = document.querySelector('.catalog-filter__price-input--min');
    const priceInputMax = document.querySelector('.catalog-filter__price-input--max');

    noUiSlider.create(priceRange, {
      start: [0, 5000],
      connect: true,
      step: 10,
      range: {
        min: 0,
        max: 5000,
      },
    });

    priceRange.noUiSlider.on("update", function (values, handle) {
      if (handle) {
        priceInputMax.value = parseInt(values[handle]);
      } else {
        priceInputMin.value = parseInt(values[handle]);
      }
    });

    priceInputMin.addEventListener("change", function () {
      priceRange.noUiSlider.set([this.value]);
    });

    priceInputMax.addEventListener("change", function () {
      priceRange.noUiSlider.set([null, this.value]);
    });
  });

}
