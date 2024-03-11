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