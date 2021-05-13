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

// Handle Username
$user.addEventListener("change", e => {

    e.preventDefault();
    $infoUser.innerHTML = "";

    if($user.value){

        $infoUser.classList.add("info");
        $userField.appendChild($infoUser);

        if($user.value.length > 3 && 
           $user.value.length <= 15 && 
           regex.user.test($user.value) === true ){
            
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

        if(regex.email.test($email.value) === true){

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
$password.addEventListener("change", e => {

    e.preventDefault();
    const $infoPassword = document.createElement("p");
    $infoPassword.innerHTML = "";

    if($password.value){

        $infoPassword.classList.add("info");
        $passwordField.appendChild($infoPassword);

        if($password.value.length > 1 && $password.value.length < 7){
            
            $infoPassword.innerHTML = `Mot de passe faible`;
            util.removeElement($infoPassword);

        } else if($password.value.length > 6 && $password.value.length < 10){
            
            $infoPassword.innerHTML = `Mot de passe moyen`;
            util.removeElement($infoPassword);

        } else if($password.value.length > 9 ){
            
            $infoPassword.innerHTML = `Mot de passe fort`;
            util.removeElement($infoPassword);
        }
    }

});

// https://www.gary-deshayes.com/fr/article/3-javascript-jquery-et-regex-securiser-un-mot-de-passe-en-temps-reel

// Handle user's confirmation of his password input
$confirmPassword.addEventListener("click", e => {
    
    e.preventDefault();

    const $infoPasswordField = document.createElement("p");
    $infoPasswordField.classList.add("info");
    $infoPasswordField.innerHTML = "";

    if($confirmPassword.value === $password.value){

        $infoPasswordField.classList.add("infoRight");
        $infoPasswordField.innerHTML = "Mot de passe confirmé";

    } else {

        $infoPasswordField.classList.add("infoWrong");
        $infoPasswordField.innerHTML = "Mot de passe non identique";
        
    }

    $confirmPassWField.appendChild($infoPasswordField);
    util.removeElement($infoPasswordField);

});

// Handle all btn in order to display password input
$showPassword.addEventListener("click", () => {   
    util.displayPassword($password);
});

$showConfirmPassword.addEventListener("click", () => {
    util.displayPassword($confirmPassword);
});