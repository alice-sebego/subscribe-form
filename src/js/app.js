import _ from 'lodash';
import * as util from './utils';
import * as regex from './regex';


// Elements of DOM
let $user = document.querySelector("#user");
let $email = document.querySelector("#email");
let $password = document.querySelector("#password");
let $confirmPassword = document.querySelector("#confirmPassword");

const $userField = document.querySelector("#userField");
const $mailFiel = document.querySelector("#mailField");
const $passwordField = document.querySelector("#passwordField");
const $confirmPassWField = document.querySelector("#confirmPassWField");
 
const $showPassword = document.querySelector("#showPassword");
const $showConfirmPassword = document.querySelector("#showConfirmPassword");

const $infoUser = document.querySelector("#infoUser");
const $infoMail = document.querySelector("#infoMail");
const $checkPassword = document.querySelector("#check-password");
const $passwordLength = document.querySelector("#password-length");
const $passwordLowcase = document.querySelector("#password-lowcase");
const $passwordUppercase = document.querySelector("#password-uppercase");
const $passwordDigit = document.querySelector("#password-digit");
const $infoConfirmPassword = document.querySelector("#infoConfirm-password");

// Handle Username
$user.addEventListener("change", e => {

    e.preventDefault();
    $infoUser.innerHTML = "";

    if($user.value){

        $infoUser.classList.add("info");
        $userField.appendChild($infoUser);

        if($user.value.length > 3 && 
           $user.value.length <= 15 && 
           regex.user.test($user.value)){
            
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
        $mailFiel.appendChild($infoMail);

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
        $passwordLength.innerHTML = `<i class="fas fa-check-circle infoRight"></i> Au moins 8 caractères. ${$password.value.length} / 8` :
        $passwordLength.innerHTML = `<i class="fas fa-check-circle infoWrong"></i> Au moins 8 caractères. ${$password.value.length} / 8` ; 

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