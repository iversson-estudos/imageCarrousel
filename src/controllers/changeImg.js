import { changeIndicators } from "./changeIndicators";

const arrayOfImgs = ["A", "B", "C", "D", "E", "F", "G", "H"];

function changeImg(nextOrPrevious, index) {
  const imgSlide = document.getElementsByClassName("image");

  const mainImg = imgSlide[0];

  let mainImgIndex = arrayOfImgs.findIndex(
    (element) => element == mainImg.textContent,
  );

  if (index != undefined) {
    mainImgIndex = index;
    mainImg.textContent = arrayOfImgs[mainImgIndex];
  } else if (nextOrPrevious == "next") {
    if (mainImgIndex == arrayOfImgs.length - 1) {
      mainImgIndex = 0;
    } else {
      mainImgIndex++;
    }
  } else if (nextOrPrevious == "previous") {
    if (mainImgIndex == 0) {
      mainImgIndex = arrayOfImgs.length - 1;
    } else {
      mainImgIndex--;
    }
  }

  mainImg.textContent = arrayOfImgs[mainImgIndex];

  console.log(mainImgIndex);
  changeIndicators(mainImgIndex);
}

export { changeImg, arrayOfImgs };
