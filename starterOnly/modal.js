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
let radios = document.getElementsByClassName('radio');
let cgu = document.getElementById('checkbox1');
let form = document.getElementsByTagName('form');


// Regex 
const regexSupTwo = new RegExp('[a-zA-Z]{2,}');
const regexEmail = new RegExp('^[a-z0-9.-_]{2,}@[a-z]{2,}\\.[a-z]{2,4}$');
const regexBirthdate = new RegExp('[0-9]{2}\\/[0-9]{2}\\/[0-9]{4}');


// Validation du formulaire

function validate(){
  if (first.value!="" && regexSupTwo.test(first.value)) {
    if (last.value!="" && regexSupTwo.test(last.value)) {
      if (email.value!="" && regexEmail.test(email.value)) {
        if (birthdate.value!="" && regexBirthdate.test(birthdate.value)) {
          if (cgu.checked) {
            for (let i=0; i<7; i++){
              if(radios[i].checked){
                return true;
                }
              }
            }
          }
        }
      }
    }
  return false;
}



  //Verification du prenom, + de 2 lettres et non vide
   first.addEventListener('input', function(){
   if (first.value!="" && regexSupTwo.test(first.value)) {
     return true;
   } else {
     return false;
   } 
   })
 

//Verification du nom, + de 2 lettres et non vide
last.addEventListener('input', function(){
  if (last.value!="" && regexSupTwo.test(last.value)) {
    console.log(true);
  } else {
    console.log(false);
  }
  })

  //Vérification de l'adresse email 
  email.addEventListener('input', function(){
    if (email.value!="" && regexEmail.test(email.value)) {
      console.log(true);
      return true;
    } else {
      console.log(false)
      return false;
    }
    })


    //Vérification de la date d'anniversaire 
  birthdate.addEventListener('input', function(){
    if (birthdate.value!="" && regexBirthdate.test(birthdate.value)) {
      console.log(true);
      return true;
    } else {
      console.log(false)
      return false;
    }
    })


// Vérification des boutons radios
for (let i=0; i<7; i++){
  radios[i].addEventListener('input', function(){
    if(radios[i].checked){
      console.log(true);
      return true;
    }
    else {
      console.log(false)
      return false;
    }
  })
}

// Vérification de la validation des CGU
cgu.addEventListener('input', function(){
  if (cgu.checked) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
  })
