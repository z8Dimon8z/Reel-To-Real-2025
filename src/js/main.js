import "simplebar";
import { getHeaderHeight } from "./functions/header-height.js";

import "./_components.js";

getHeaderHeight();

window.addEventListener('resize', () => {
  getHeaderHeight();
});
