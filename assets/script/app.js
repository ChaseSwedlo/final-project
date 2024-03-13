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

//Email validation
function isEmail(email) {
    let hasAt = false;
    let hasDot = false;
    for(let i = 0; i < email.length-5; i++) {
        if(email.charAt(i) === '@') {
            hasAt = true;
            i = email.length+1
        }
    }
    if(email.charAt(email.length-3) === '.' || email.charAt(email.length-4) === '.')
        hasDot = true;
    if(hasAt && hasDot)
        return true;
    return false;
}

const footerButton = document.querySelector(".footer-button");
const footerEmail = document.querySelector(".footer-email");
const dialogueEmail = document.querySelector(".email");
const dialogueButton = document.querySelector(".button");
const dialogueFirstName = document.querySelector('.fname');
const dialogueLastName = document.querySelector('.lname');
const passField = document.querySelector('.password');

function validateEmail(event, form) {
    event.preventDefault()
    let email = form.value;
    let validEmail = false;
    if(email != "") {
        validEmail = isEmail(email);
    }
    if(validEmail) {
        form.style.borderColor = "rgb(23, 216, 23)";
    }
    else {
        form.style.borderColor = "rgb(250, 49, 49)";
    }
}
footerButton.addEventListener("click", (evnt) => {
    validateEmail(evnt, footerEmail);
});

//Password/name validation
function validName(name) {
    if(name.value != '' && name.value.length > 1) {
        name.style.borderColor = "rgb(23, 216, 23)";
    }
    else {
        name.style.borderColor = "rgb(250, 49, 49)";
    }
}
function validPassword() {

}
dialogueButton.addEventListener("click", (evnt) => {
    validateEmail(evnt, dialogueEmail);
    validName(dialogueFirstName);
    validName(dialogueLastName);

});
//Top movies scroll
//Did this to adjust for mouse scrolling.
const topMoviesDiv = document.querySelector(".top-ten-movies");
topMoviesDiv.addEventListener('wheel', function(event) {
    event.preventDefault();
    topMoviesDiv.scrollLeft += event.deltaY;
});