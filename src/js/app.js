import _ from 'lodash';
import * as util from './utils';


// Elements of DOM
let $user = document.querySelector("#user");
let $email = document.querySelector("#email");
let $password = document.querySelector("#password");
let $confirmPassword = document.querySelector("#confirm-password");

const $userField = document.querySelector("#userField");
const $mailFiel = document.querySelector("#mailField");
const $passwordField = document.querySelector("#passwordField");
const $confirmPassWField = document.querySelector("#confirmPassWField");

const $infoUser = document.querySelector("#infoUser");

// Regex List
const regexUser = /^[a-zA-Z\d\S]{3,15}$/;

$user.addEventListener("change", (e) =>{

    e.preventDefault();
    $infoUser.innerHTML = "";

    if($user.value){

        $infoUser.setAttribute("id", "infoUser");
        $infoUser.classList.add("info");
        $userField.appendChild($infoUser);

        if($user.value.length > 3 && 
           $user.value.length < 15 && 
           regexUser.test($user.value) === true ){
            
            $infoUser.classList.add("infoRight");
            $infoUser.innerHTML = `Votre pseudo <strong>${user.value}</strong> est valide`;
            util.removeElement($infoUser);

        } else {
            
            $infoUser.classList.add("infoWrong");
            $infoUser.innerHTML = `Votre pseudo <strong>${user.value}</strong> doit contenir entre 3 et 15 caractères & ne pas contenir d'espace`;
            util.removeElement($infoUser);
        }
    }

});
