var firstName = document.getElementById("first_name");
var lastName = document.getElementById("last_name");
var email = document.getElementById("email");
var numbers = document.getElementById("numbers");
const text = document.getElementById("text");
const form = document.getElementById('form');

console.log(firstName.value)

const printMessage = (firstName, lastName, email, numbers) => {
  text.innerHTML = message(firstName, lastName, email, numbers);
};

const mailFormat = /(?=.{8,30}$)^[\w.-]+@[\w-]+.[a-zA-Z]{2,3}/;

const emailWrong = (email) => {
  if (email.value.match(mailFormat)) {
    return false
  } else {
    return true
  };
};

const message = (firstName, lastName, email, numbers) => {
  var _message =''
  if (firstName.value === '') {
    _message = "Veuillez fournir un prénom"
  } else if (lastName.value === '') {
    _message = "Veuillez fournir un nom"
  } else if (email.value === '') {
    _message = "Veuillez fournir un email"
  } else if (emailWrong(email)) {
    _message = "Votre e-mail n'est pas valide"
  } else if (numbers.value == ''){
    _message = "voulez pas gagner c'est ça ???"
  } else {
    _message = "tendez tendez..."
  }
  return _message
};

form.addEventListener('submit', (event) => event.preventDefault(printMessage(firstName, lastName, email, numbers)));

//^\b([1-9]|[1234][0-9])\b\b(,([1-9]|[1234][0-9])){5}\b

//^\b([1-9]|[1234][0-9])\b\b(,([1-9]|[1234][0-9])){5}\b