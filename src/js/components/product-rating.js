import vars from "../_vars.js";

if (vars.productRatingBar) {
  const maxReviews = parseInt(vars.productRatingBar.dataset.maxReviews);

  const ratingBars = vars.productRatingBar.querySelectorAll('.product-testimonials__rating-bar');

  ratingBars.forEach(bar => {
    const value = parseInt(bar.dataset.value);
    const percentage = (value / maxReviews) * 100;

    const valueBar = bar.querySelector(".product-testimonials__rating-value-bar");
    valueBar.style.width = `${percentage}%`;
  });
}
