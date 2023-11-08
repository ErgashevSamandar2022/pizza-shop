'use strict';
const submit = document.getElementById('submit'),
    firstName = document.getElementById('firstName'),
    lastName = document.getElementById('lastName'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    phone = document.getElementById('phone');

window.addEventListener('DOMContentLoaded', () => {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        check_values();
    });
});
function check_values() {
    const firstValue = firstName.value,
        lastValue = lastName.value,
        emailValue = email.value,
        pasValue = password.value,
        telValue = phone.value;
    if (firstValue.trim() === '') {
        serErrorFor(firstName, "First Name bo'sh bo'lmasligi kerak.");
    } else {
        serSuccesFor(firstName);
    }
    if (lastValue.trim() === '') {
        serErrorFor(lastName, "Last Name bo'sh bo'lmasligi kerak.");
    } else {
        serSuccesFor(lastName);
    }
    if (emailValue.trim() === '') {
        serErrorFor(email, "Email bo'sh bo'lmasligi kerak.");
    } else if (!isEmail(emailValue)) {
        serErrorFor(email, 'Email xato kiritildi.');
    } else {
        serSuccesFor(email);
    }
    if (pasValue.trim() === '') {
        serErrorFor(password, "Parollar bo'sh bo'lmasligi kerak.");
    } else {
        serSuccesFor(password);
    }
    if (telValue.trim() === '') {
        serErrorFor(phone, "Phone Number bo'sh bo'lmasligi kerak.");
    } else {
        serSuccesFor(phone);
    }
}
function serErrorFor(username, message) {
    const usernameParent = username.parentElement;
    const formIcon = usernameParent.querySelector('.form_icon i');
    const smallText = usernameParent.querySelector('.form_span');
    smallText.innerHTML = message;
    username.classList.add('error');
    formIcon.classList.add('fa-circle-xmark');
}
function serSuccesFor(username) {
    const usernameParent = username.parentElement;
    const smallText = usernameParent.querySelector('.form_span');
    const formIcon = usernameParent.querySelector('.form_icon i');
    smallText.innerHTML = '';
    username.classList.remove('error');
    username.classList.add('success');
    formIcon.classList.remove('fa-circle-xmark');
    formIcon.classList.add('fa-circle-check');
}
function isEmail(email) {
    const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
}
