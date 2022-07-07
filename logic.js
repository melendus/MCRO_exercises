const greenCircle = document.getElementById("green-circle");
const redCircle = document.getElementById("red-circle");
const blueCircle = document.getElementById("blue-circle");

// console.log(greenCircle);

var counterGreen = 0;
var counterRed = 0;
var counterBlue = 0;

greenCircle.addEventListener("click", () => {
  if (counterGreen === 1) counterGreen = 0;
  else counterGreen++;
  console.log(counterGreen);
});

function doAnimationGreen() {
  if (counterGreen == 0) {
    if (greenCircle.classList.contains("dot-1-animation-2")) {
      greenCircle.classList.remove("dot-1-animation-2");
    }
    greenCircle.classList.add("dot-1-animation-1");
  } else {
    greenCircle.classList.remove("dot-1-animation-1");
    greenCircle.classList.add("dot-1-animation-2");
  }
}

function doAnimationRed() {
  redCircle.classList.add("dot-2-animation");
  setTimeout(function () {
    redCircle.classList.remove("dot-2-animation");
  }, 5500);
}

function doAnimationBlue() {
  blueCircle.classList.add("dot-3-animation");
  setTimeout(function () {
    blueCircle.classList.remove("dot-3-animation");
  }, 3000);
}
