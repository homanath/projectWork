var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
    var name = document.getElementById("contact-name").value;

    if (name.length == 0) {
        nameError.innerHTML = "Name cannot be blank";
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-circle-check"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById("phone").value;

    if (phone.length == 0) {
        phoneError.innerHTML = "Phone number cannot be blank";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Phone number must be 10 digits";
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById("email").value;

    if (email.length == 0) {
        emailError.innerHTML = "Email cannot be blank";
        return false;
    }
    if (!email.match(/^[A-Za-z._\-0-9]+@[A-Za-z]+\.[a-z]{2,4}$/)) {
        emailError.innerHTML = "Invalid email format";
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-circle-check"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById("message").value;

    if (message.length == 0) {
        messageError.innerHTML = "Message cannot be blank";
        return false;
    }
    messageError.innerHTML = '<i class="fas fa-circle-check"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.innerHTML = "Please fix errors to submit";
        return false;
    }
    submitError.innerHTML = "";
    return true;
}
