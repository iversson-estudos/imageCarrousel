import {
  addEventsRotateCarrousel,
  addEventsIndicators,
} from "../events/eventHandlers";
import { arrayOfImgs } from "../controllers/changeImg";

function mainView() {
  const main = document.getElementById("main");

  main.innerHTML = `
    <div class="slide">
      <span id="previous"> < </span>
      <div class="image">A</div>
      <span id="next"> > </span>
    </div>
    <div class="underSlide">
    </div>
    `;

  arrayOfImgs.forEach((_, index) => {
    if (index == 0) {
      const underSlide = document.getElementsByClassName("underSlide")[0];
      underSlide.innerHTML += `<i class="material-icons">radio_button_checked</i>
  `;
    } else {
      const underSlide = document.getElementsByClassName("underSlide")[0];
      underSlide.innerHTML += `<i class="material-icons">radio_button_unchecked</i>
`;
    }
  });

  addEventsRotateCarrousel();
  addEventsIndicators();
}

export { mainView };
