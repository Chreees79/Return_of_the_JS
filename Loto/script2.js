var firstName = document.getElementById("first_name");
var lastName = document.getElementById("last_name");
var email = document.getElementById("email");
var numbers = document.getElementById("numbers");
const text = document.getElementById("text");
const form = document.getElementById('form');



const mailFormat = /(?=.{8,30}$)^[\w.-]+@[\w-]+.[a-zA-Z]{2,3}/;
/*
const printMessage = (firstName, lastName, email, numbers) => {
  text.innerHTML = message(firstName, lastName, email, numbers);
};
*/
form.addEventListener("submit", (error) => {

  const emailVrong = (email) => {
    if (email.value.match(mailFormat))
    return false
  };
  let messages = []
  //const message = (firstName, lastName, email, numbers) => {
    if (firstName == '') {
      messages.push("fournir un prénom")
    } if (lastName == '') {
      messages.push("Veuillez fournir un nom")
    } if (email == '') {
      messages.push("Veuillez fournir un email")
    } if (emailVrong(email)) {
      messages.push("Votre e-mail n'est pas valide")
    } if (numbers == '') {
      messages.push("voulez pas gagner cest ca ?")
    } else {
      messages.push("tendez tendez...")
    }
  //}; 
  if (messages.length > 0) {
    error.preventDefault()
    text.innerHTML = messages.join(', ') 
  }
});


// Ajouter un écouteur d'évènements à la table avec une fonction fléchée
/* const el = document.querySelector("#outside");
el.addEventListener("click", () => {
  modifyText("quatre");
}, false);
  */