const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM";
const lowerCase = "qwertyuioplkjhgfdsazxcvbnm";
const number = "0123456789";
const symbol = "! # $ % & ' * + - / = ? ^ _ ` { | } ~";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}
function copyPassword() {
  if (passwordBox.value) {
    passwordBox.select();
    document.execCommand("copy") ? alert("Copied!") : alert("Failed to copy.");
  } else {
    alert("No password to copy!");
  }
}
