function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Elements du DOM
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// Evenement au click qui lance la modale 
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Fonction pour le lancement de la modale
function launchModal() {
  modalbg.style.display = "block";
}

// Fonction pour la fermeture de la modale 
function closeModal() {
  modalbg.style.display = "none";
}

//Récupération des champs 
let first = document.getElementById('first');
let last = document.getElementById('last');
let email = document.getElementById('email');
let birthdate = document.getElementById('birthdate');
let quantity = document.getElementById('quantity')
let radios = document.getElementsByClassName('radio');
let cgu = document.getElementById('checkbox1');
let form = document.getElementById('form');


// Regex 
const regexSupTwo = new RegExp('[a-zA-Z]{2,}');
const regexEmail = new RegExp('^[a-z0-9.-_]{2,}@[a-z]{2,}\\.[a-z]{2,4}$');
const regexBirthdate = new RegExp('[0-9]{4}\\-[0-9]{2}\\-[0-9]{2}');

// Vérification de chaque input 
function firstnameValidate() {
  if (first.value != "" && regexSupTwo.test(first.value)) {
    return true
  } else {
    errorMessage(items.firstname, first);
    errorInput(first);
    return false
  }
}

function lastnameValidate() {
  if (last.value != "" && regexSupTwo.test(last.value)) {
    return true
  } else {
    errorMessage(items.name, last);
    errorInput(last);
    return false;
  }
}

function emailValidate() {
  if (email.value != "" && regexEmail.test(email.value)) {
    return true;
  } else {
    errorMessage(items.email, email);
    errorInput(email);
    return false;
  }
}

function birthdateValidate() {
  if (birthdate.value != "" && regexBirthdate.test(birthdate.value)) {
    return true;
  } else {
    errorMessage(items.birthdate, birthdate);
    errorInput(birthdate);
    return false;
  }
}

function quantityValidate() {
  if (quantity.value != "") {
    return true;
  } else {
    errorMessage(items.quantity, quantity);
    errorInput(quantity);
    return false;
  }
}

function cguValidate() {
  if (cgu.checked) {
    return true;
  } else {
    errorMessageCgu(items.cgu);
    errorCheckbox();
    return false;
  }
}

function radiosValidate() {
  for (let i = 0; i < 7; i++) {
    if (radios[i].checked) {
      return true;
    }
  }
  errorMessage(items.radios, radios);
  return false;

}

// Objets contenant les messages d'erreurs
let items = {
  "firstname": "Veuillez entrer un prénom avec au moins 2 lettres",
  "name": "Veuillez entrer un nom avec au moins 2 lettres",
  "email": "Veuillez entrer une adresse mail valide",
  "birthdate": "Veuillez entrer une date d'anniversaire",
  "quantity": "Veuillez entrer un nombre compris entre 1 et 99",
  "radios": "Veuillez choisir un tournoi",
  "cgu": "Veuillez lire et accepter les conditions d'utilisation"
}

//Fonction créant un message d'erreur s'il n'y en a pas 
function errorMessage(items, where) {
  if (!where.parentNode.querySelector('.red')) {
    let error = document.createElement("div");
    error.setAttribute("class", "red");
    error.innerHTML = items;
    where.parentNode.appendChild(error);
  }
}

// Fonction créant un message d'erreur s'il n'y en a pas pour les cgu
function errorMessageCgu(items) {
  let cgu = document.querySelector('.checkbox2-label')
  if (!cgu.querySelector('.redCgu')) {
    let error = document.createElement("div");
    error.setAttribute("class", "redCgu");
    error.innerHTML = items;
    let cguCheckbox = document.querySelector('label.checkbox2-label');
    console.log(cguCheckbox);
    cguCheckbox.appendChild(error);
  }
}

// Fonction créant une bordure rouge en cas d'erreur 
function errorInput(where) {
  if (!where.querySelector('.borderRed')) {
    where.setAttribute('class', 'text-control borderRed');
  }
}

function errorCheckbox() {
  let cgu = document.querySelector('.checkbox2-label')
  if (!cgu.querySelector('.checkbox--borderRed'))
    cgu.setAttribute('class', 'checkbox2-label checkbox--borderRed');
}



// Fonction pour afficher les erreurs 
function errorApply() {
  firstnameValidate();
  lastnameValidate();
  emailValidate();
  birthdateValidate();
  quantityValidate();
  cguValidate();
  radiosValidate();
}

// Validation du formulaire 
form.addEventListener("submit", function (event) {

// Afficher les erreurs 
  errorApply();

  // Tester chaque champs
  if (firstnameValidate() &&
    lastnameValidate() &&
    emailValidate() &&
    birthdateValidate() &&
    quantityValidate() &&
    cguValidate() &&
    radiosValidate()
  ) {
    return true;
  } else {
    event.preventDefault();
    
  }
})