import { changeImg } from "../controllers/changeImg";

function addEventsRotateCarrousel() {
  const nextImg = document.getElementById("next");
  const previousImg = document.getElementById("previous");
  nextImg.addEventListener("click", () => changeImg("next"));
  previousImg.addEventListener("click", () => changeImg("previous"));
}

function addEventsIndicators() {
  const underSlide = document.getElementsByClassName("underSlide");
  const indicators = Array.from(underSlide[0].children);

  indicators.forEach((element, index) => {
    element.addEventListener("click", () => changeImg("", index));
  });
}

export { addEventsRotateCarrousel, addEventsIndicators };
