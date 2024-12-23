function changeImg(upOrDown) {
  const imgSlide = document.getElementsByClassName("image");

  const leftImg = imgSlide[0];
  const mainImg = imgSlide[1];
  const rightImg = imgSlide[2];

  const arrayOfImgs = ["A", "B", "C", "D", "E"];

  let mainImgIndex = arrayOfImgs.findIndex(
    (element) => element == mainImg.textContent,
  );
  let leftImgIndex = arrayOfImgs.findIndex(
    (element) => element == leftImg.textContent,
  );
  let rightImgIndex = arrayOfImgs.findIndex(
    (element) => element == rightImg.textContent,
  );

  if (upOrDown == "next") {
    if (mainImgIndex == arrayOfImgs.length - 1) {
      mainImgIndex = 0;
      leftImgIndex++;
      rightImgIndex++;
    } else if (rightImgIndex == arrayOfImgs.length - 1) {
      rightImgIndex = 0;
      mainImgIndex++;
      leftImgIndex++;
    } else if (leftImgIndex == arrayOfImgs.length - 1) {
      leftImgIndex = 0;
      mainImgIndex++;
      rightImgIndex++;
    } else {
      mainImgIndex++;
      rightImgIndex++;
      leftImgIndex++;
    }
  }
  leftImg.textContent = arrayOfImgs[leftImgIndex];
  rightImg.textContent = arrayOfImgs[rightImgIndex];
  mainImg.textContent = arrayOfImgs[mainImgIndex];

  console.log(leftImgIndex, mainImgIndex, rightImgIndex);
}

export { changeImg };
