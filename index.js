"use strict";
let main = document.querySelector(".main-block");
let ball = document.querySelector(".ball");
let mainCoords = main.getBoundingClientRect();

main.onmousemove = function (event) {


  let ballCoords = {
    top: event.clientY - mainCoords.top - main.clientTop - ball.clientHeight / 2,
    left: event.clientX - mainCoords.left - main.clientLeft - ball.clientWidth / 2
  };


  if (ballCoords.top < 0) ballCoords.top = 0;
  if (ballCoords.left < 0) ballCoords.left = 0;
  if (ballCoords.left + ball.clientWidth > main.clientWidth) {
    ballCoords.left = main.clientWidth - ball.clientWidth;
  }
  if (ballCoords.top + ball.clientHeight > main.clientHeight) {
    ballCoords.top = main.clientHeight - ball.clientHeight;
  }

  ball.style.left = ballCoords.left + 'px';
  ball.style.top = ballCoords.top + 'px';
};


document.onmousemove = function (event) {
  if (event.clientX > mainCoords.left && event.clientX < mainCoords.right && event.clientY > mainCoords.top && event.clientY < mainCoords.bottom) {
    ball.style.display = "block";
  } else {
    ball.style.display = "none";
  }
};