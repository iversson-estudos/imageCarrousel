import { addEventsRotateCarrousel } from "../events/eventHandlers";

function mainView() {
  const main = document.getElementById("main");

  main.innerHTML = `
    <div class="slide">
      <span id="previous"> < </span>
      <div id="image">1</div>
      <span id="next"> > </span>
    </div>
    `;

  addEventsRotateCarrousel();
}

export { mainView };
