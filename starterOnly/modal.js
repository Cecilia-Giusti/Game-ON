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
const closeBtn = document.getElementById('close');

// Evenement au click qui lance la modale 
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Fonction pour le lancement de la modale
function launchModal() {
  modalbg.style.display = "block";
}

// Evenement au click qui ferme la modale 
closeBtn.addEventListener("click", closeModal);

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
    deleteErrorMessage(first);
    deleteErrorInput(first);
    return true;
  } else {
    errorMessage(items.firstname, first);
    errorInput(first);
    return false
  }
}

function lastnameValidate() {
  if (last.value != "" && regexSupTwo.test(last.value)) {
    deleteErrorMessage(last);
    deleteErrorInput(last);
    return true;
  } else {
    errorMessage(items.name, last);
    errorInput(last);
    return false;
  }
}

function emailValidate() {
  if (email.value != "" && regexEmail.test(email.value)) {
    deleteErrorMessage(email);
    deleteErrorInput(email);
    return true;
  } else {
    errorMessage(items.email, email);
    errorInput(email);
    return false;
  }
}

function birthdateValidate() {
  if (birthdate.value != "" && regexBirthdate.test(birthdate.value)) {
    deleteErrorMessage(birthdate);
    deleteErrorInput(birthdate);
    return true;
  } else {
    errorMessage(items.birthdate, birthdate);
    errorInput(birthdate);
    return false;
  }
}

function quantityValidate() {
  if (quantity.value != "") {
    deleteErrorMessage(quantity);
    deleteErrorInput(quantity);
    return true;
  } else {
    errorMessage(items.quantity, quantity);
    errorInput(quantity);
    return false;
  }
}

function cguValidate() {
  if (cgu.checked) {
    deleteErrorMessageCgu();
    deleteErrorCheckbox();
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

// Fonction enlevant le message d'erreur 
function deleteErrorMessage(where) {
  if (where.parentNode.querySelector('.red')) {
    let whereMessageParent = where.parentNode;
    let whereMessageChild = where.parentNode.querySelector('.red')
    whereMessageParent.removeChild(whereMessageChild);
  }
}

// Fonction créant un message d'erreur s'il n'y en a pas pour les cgu
function errorMessageCgu(items) {
  let cgu = document.querySelector('.checkbox2-label');
  if (!cgu.querySelector('.redCgu')) {
    let error = document.createElement("div");
    error.setAttribute("class", "redCgu");
    error.innerHTML = items;
    let cguCheckbox = document.querySelector('label.checkbox2-label');
    cguCheckbox.appendChild(error);
  }
}

// Fonction enlevant le message d'erreur pour les cgu
function deleteErrorMessageCgu() {
  let cgu = document.querySelector('.checkbox2-label')
  if (cgu.querySelector('.redCgu')) {
    let cguCheckboxChild = document.querySelector('.redCgu');
    let cguCheckboxParent = cguCheckboxChild.parentNode;
    cguCheckboxParent.removeChild(cguCheckboxChild);
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


// Fonction retirant la bordure rouge
function deleteErrorInput(where) {
  where.setAttribute('class', 'text-control');

}

function deleteErrorCheckbox() {
  let cgu = document.querySelector('.checkbox2-label')
  cgu.setAttribute('class', 'checkbox2-label');
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


// Fonction pour valider tous les champs 
function validateForm(){
  if (firstnameValidate() &&
  lastnameValidate() &&
  emailValidate() &&
  birthdateValidate() &&
  quantityValidate() &&
  cguValidate() &&
  radiosValidate()){
    return true;
  }else {
    return false
  }
}

// Validation du formulaire 
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Tests de tous les champs 
  if (validateForm()) {
    closeModal();
    thanks();
    return true;
  } else {
    // Afficher les erreurs 
    errorApply();
  }
})

// Remerciement 
const thanksBtn = document.getElementById('thanks');

// Fonction de lancement du message de remerciement
function thanks() {
  thanksBtn.setAttribute("class", "thanksbground display-block");
  }

//Fermeture du message de remerciement
thanksBtn.addEventListener('click', function () {
  thanksBtn.setAttribute("class", "thanksbground display-none");

})

