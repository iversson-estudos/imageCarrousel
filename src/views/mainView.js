import { addEventsRotateCarrousel } from "../events/eventHandlers";
import { arrayOfImgs } from "../controllers/changeImg";

function mainView() {
  const main = document.getElementById("main");

  main.innerHTML = `
    <div class="slide">
      <span id="previous"> < </span>
      <div class="image left">A</div>
      <div class="image principal">B</div>
      <div class="image right">C</div>
      <span id="next"> > </span>
    </div>
    <div class="underSlide">
    </div>
    `;

  arrayOfImgs.forEach(() => {
    const underSlide = document.getElementsByClassName("underSlide")[0];
    underSlide.innerHTML += `<i class="material-icons">radio_button_unchecked</i>
`;
  });

  addEventsRotateCarrousel();
}

export { mainView };
