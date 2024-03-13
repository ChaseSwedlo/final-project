'use strict';

//Account dialogue functiions
const loginButton = document.querySelector('.login-button');
const login = document.querySelector('.log-in');
const formBox = document.querySelector('.form-box');
const darkBkg = document.querySelector('.dark-background');

function showCreateAccount() {
    login.classList.remove("hidden");
    login.classList.add("shown");
    formBox.classList.add("translateY");
    console.log('test');
}

function hideCreateAccount() {
    login.classList.remove("shown");
    login.classList.add("hidden");
    formBox.classList.remove("translateY");
}

loginButton.addEventListener("click", showCreateAccount);
darkBkg.addEventListener("click", hideCreateAccount);
formBox.addEventListener("click", (event) => {
    event.stopPropagation();
});

// SCROLL LANDING-PAGE //

const container = document.querySelector(".scroll");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
const arrows = document.querySelectorAll(".scroll-button");
let currentIndex = 0;
const boxes = document.querySelectorAll(".box");


function scrollRight() {
  currentIndex++;
  if (currentIndex >= boxes.length) {
    currentIndex = 0;
  }
  const nextBox = boxes[currentIndex];
  container.scroll({
    left: nextBox.offsetLeft,
    behavior: "smooth"
  });
}

function scrollLeft() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = boxes.length - 1;
  }
  const previousBox = boxes[currentIndex];
  container.scroll({
    left: previousBox.offsetLeft,
    behavior: "smooth"
  });
}
rightButton.addEventListener("click", scrollRight);
leftButton.addEventListener("click", scrollLeft);

// END SCROLL LANDING-PAGE

// SCROLL-LANDING ARROW VISIBILITY 
function showButtons() {
    leftButton.classList.add("visible");
    rightButton.classList.add("visible");
}

function hideButtons() {
    leftButton.classList.remove("visible");
    rightButton.classList.remove("visible");
}

container.addEventListener('mouseover', showButtons);
container.addEventListener('mouseout', hideButtons);

leftButton.addEventListener('mouseover', showButtons);
rightButton.addEventListener('mouseover', showButtons);

leftButton.addEventListener('mouseout', hideButtons);
rightButton.addEventListener('mouseout', hideButtons);
// END SCROLL-LANDING ARROW VISIBILITY 