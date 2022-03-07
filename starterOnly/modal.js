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


// Regex 
const regexSupTwo = new RegExp('[a-zA-Z]{2,}');
const regexEmail = new RegExp('^[a-z0-9.-_]{2,}@[a-z]{2,}\\.[a-z]{2,4}$');
const regexBirthdate = new RegExp('[0-9]{4}\\-[0-9]{2}\\-[0-9]{2}');

// Validation du formulaire 
function validate() {

  // Vérification et validations des données recues
  if (first.value != "" && regexSupTwo.test(first.value)) {
    if (last.value != "" && regexSupTwo.test(last.value)) {
      if (email.value != "" && regexEmail.test(email.value)) {
        if (birthdate.value != "" && regexBirthdate.test(birthdate.value)) {
          if (quantity.value != "") {
            if (cgu.checked) {
              for (let i = 0; i < 7; i++) {
                if (radios[i].checked) {
                  return true;
                }

                // Messages d'erreurs en cas de non validité
                else {
                  errorMessage(items.radios, radios);
                }
              }
            }
            else {
              errorMessage(items.cgu, cgu);
              errorCheckbox();
              
            }
          }
          else {
            errorMessage(items.quantity, quantity);
            errorInput(quantity);
          }
        }
        else {
          errorMessage(items.birthdate, birthdate);
          errorInput(birthdate);
        }
      }
      else {
        errorMessage(items.email, email);
        errorInput(email);
      }
    }
    else {
      errorMessage(items.name, last);
      errorInput(last);
    }
  }
  else {
    errorMessage(items.firstname, first);
    errorInput(first);
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
  if (!document.querySelector('.red')) {
    let error = document.createElement("div");
    error.setAttribute("class", "red");
    error.innerHTML = items;
    where.parentNode.appendChild(error);
  }
}

// Fonction créant une bordure rouge en cas d'erreur 
function errorInput (where){
  if(!document.querySelector('.borderRed')) {
    where.setAttribute('class', 'text-control borderRed');
  }
}

function errorCheckbox (){
  if (!document.querySelector('.borderRed'))
  document.querySelector('.checkbox2-label').setAttribute('class', 'checkbox2-label borderRed checkboxPadding');
}





