import { changeImg } from "../controllers/changeImg";

function addEventsRotateCarrousel() {
  const nextImg = document.getElementById("next");
  const previousImg = document.getElementById("previous");

  nextImg.addEventListener("click", () => changeImg("next"));
  previousImg.addEventListener("click", () => changeImg("previous"));
}

export { addEventsRotateCarrousel };
