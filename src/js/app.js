import _ from 'lodash';
import * as util from './utils';
import * as regex from './regex';

/*  ----- ELEMENTS OF DOM ------ */

// List of inputs
const $form = document.querySelector("form");  
let $user = document.querySelector("#user");
let $email = document.querySelector("#email");
let $password = document.querySelector("#password");
let $confirmPassword = document.querySelector("#confirmPassword");

// Buttons which display password's inputs
const $showPassword = document.querySelector("#showPassword");
const $showConfirmPassword = document.querySelector("#showConfirmPassword");

// Elements which display information's user of inputs
const $infoUser = document.querySelector("#infoUser");
const $infoMail = document.querySelector("#infoMail");
const $checkPassword = document.querySelector("#check-password");
const $passwordLength = document.querySelector("#password-length");
const $passwordLowcase = document.querySelector("#password-lowcase");
const $passwordUppercase = document.querySelector("#password-uppercase");
const $passwordDigit = document.querySelector("#password-digit");
const $infoConfirmPassword = document.querySelector("#infoConfirm-password");
const $checkAll = document.querySelector("#check-all");
let $validation = document.querySelector("#validation");

/*  ----- HANDLE OF USER'S INPUTS ------ */

// Handle Username
$user.addEventListener("change", e => {

    e.preventDefault();
    $infoUser.innerHTML = "";

    if($user.value){

        $infoUser.classList.add("info");

        if(regex.user.test($user.value)){
            
            $infoUser.classList.add("infoRight");
            $infoUser.innerHTML = `Votre pseudo <strong>${$user.value}</strong> est valide`;
            util.removeElement($infoUser);

        } else {
            
            $infoUser.classList.add("infoWrong");
            $infoUser.innerHTML = `Votre pseudo <strong>${$user.value}</strong> doit contenir entre 3 et 15 caractères & ne pas contenir d'espace`;
            util.removeElement($infoUser);
        }
    }

});

// Handle user's email
$email.addEventListener("change", e => {

    e.preventDefault();
    $infoMail.innerHTML = "";

    if($email.value){

        $infoMail.classList.add("info");

        if(regex.email.test($email.value)){

            $infoMail.classList.add("infoRight");
            $infoMail.innerHTML = `Votre e-mail <strong>${$email.value}</strong> est valide`;
            util.removeElement($infoMail);

        } else {

            $infoMail.classList.add("infoWrong");
            $infoMail.innerHTML = `Votre e-mail <strong>${$email.value}</strong> n'est pas valide`;
            util.removeElement($infoMail);

        }

    }

});

// Handle the first input of password's user
$password.addEventListener("keyup", e => {

    e.preventDefault();
    $checkPassword.classList.add("info");

    if($password.value){

        // Check password's length
        regex.passwordLength.test($password.value) ? 
        $passwordLength.innerHTML = `<i class="fas fa-check-circle infoRight"></i> Au moins 8 caractères. ${$password.value.length} / 8`: 
        $passwordLength.innerHTML = `<i class="fas fa-check-circle infoWrong"></i> Au moins 8 caractères. ${$password.value.length} / 8`; 

        // Check a lowcase's string presence in the password
        regex.lowcasePresence.test($password.value) ?
        $passwordLowcase.innerHTML = `<i class="fas fa-check-circle infoRight"></i> Au moins 1 caractère en minuscule.`: 
        $passwordLowcase.innerHTML = `<i class="fas fa-check-circle infoWrong"></i> Au moins 1 caractère en minuscule.`;

        // Check a uppercase's string presence in the password
        regex.uppercasePresence.test($password.value) ?
        $passwordUppercase.innerHTML = `<i class="fas fa-check-circle infoRight"></i> Au moins 1 caractère en majuscule.`:
        $passwordUppercase.innerHTML = `<i class="fas fa-check-circle infoWrong"></i> Au moins 1 caractère en majuscule.`;
        
        // Check a digit's presence in the password
        regex.digitPresence.test($password.value) ?
        $passwordDigit.innerHTML = `<i class="fas fa-check-circle infoRight"></i> Au moins 1 chiffre.`: 
        $passwordDigit.innerHTML = `<i class="fas fa-check-circle infoWrong"></i> Au moins 1 chiffre.`;

    } else {

        $passwordLength.innerHTML = "";
        $passwordLowcase.innerHTML = "";
        $passwordUppercase.innerHTML = "";
        $passwordDigit.innerHTML = "";

    }

});

// Handle user's confirmation of his password input
$confirmPassword.addEventListener("keyup", e => {
    
    e.preventDefault();
    $infoConfirmPassword.classList.add("info");

    if($confirmPassword.value){

        $confirmPassword.value === $password.value ?
        $infoConfirmPassword.innerHTML = `<i class="fas fa-check-circle infoRight"></i> Mot de passe confirmé`: 
        $infoConfirmPassword.innerHTML = `<i class="fas fa-check-circle infoWrong"></i> Mot de passe non identique`;

    } else {

        $infoConfirmPassword.innerHTML = "";

    }
        
});

// Handle all btn in order to display password input
$showPassword.addEventListener("click", () => {   
    util.displayPassword($password);
});

$showConfirmPassword.addEventListener("click", () => {
    util.displayPassword($confirmPassword);
});

// Undisabled submit button

$checkAll.addEventListener("click", e =>{
    
    e.preventDefault();
    
    if( 
        ! regex.user.test($user.value) &&
        ! regex.email.test($email.value) && 
        ! regex.passwordLength.test($password.value) &&
        ! regex.lowcasePresence.test($password.value) &&
        ! regex.uppercasePresence.test($password.value) &&
        ! regex.digitPresence.test($password.value) &&
        $password.value === ! $confirmPassword.value )
        
        {
            console.log("Des inputs sont invalides");
            $validation.classList.add("infoWrong");
            $validation.innerHTML = `Certains valeurs sont invalides<br>Veuillez corriger vos données svp`;
            util.removeContent($validation);
            
        } else {

            console.log("Tout est ok");
            $validation.classList.add("infoRight");
            $validation.innerHTML = `Vos données sont valides<br>Vous êtes inscrit(e)`;
            util.removeContent($validation);
        }

    
});
