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

function validateEmail(event, form) {
    event.preventDefault()
    let email = form.value;
    let validEmail = false;
    if(email != "") {
        console.log("test1");
        validEmail = isEmail(email);
    }
    if(validEmail) {
        console.log("test2");
        form.value = "";
        form.style.borderColor = "rgb(23, 216, 23)";
    }
    else {
        console.log("test3");
        form.style.borderColor = "rgb(250, 49, 49)";
    }
}
footerButton.addEventListener("click", (evnt) => {
    validateEmail(evnt, footerEmail);
});
dialogueButton.addEventListener("click", (evnt) => {
    validateEmail(evnt, dialogueEmail);
});
