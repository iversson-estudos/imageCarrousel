import { arrayOfImgs } from "./changeImg";

function changeIndicators(index) {
  const underSlide = document.getElementsByClassName("underSlide");
  const indicators = Array.from(underSlide[0].children);
  indicators.forEach((child) => (child.textContent = "radio_button_unchecked"));
  indicators[index].textContent = "radio_button_checked";
}

export { changeIndicators };
