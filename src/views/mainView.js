import { addEventsRotateCarrousel } from "../events/eventHandlers";

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
    `;

  addEventsRotateCarrousel();
}

export { mainView };
