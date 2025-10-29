import vars from "../_vars.js";

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    vars.toTopBtn.classList.add("to-top--visible");
  } else {
    vars.toTopBtn.classList.remove("to-top--visible");
  }
});
