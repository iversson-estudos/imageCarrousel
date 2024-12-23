function changeImg(upOrDown) {
  const imgShown = document.getElementById("image");
  let counter = parseInt(imgShown.textContent);
  const arrayOfImgs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (upOrDown == "previous") {
    if (counter == 0) {
      counter = arrayOfImgs.length;
    } else {
      counter--;
    }
    imgShown.textContent = counter;
  } else {
    if (counter == arrayOfImgs.length) {
      counter = 0;
    } else {
      counter++;
    }
    imgShown.textContent = counter;
  }
}

export { changeImg };
