import _ from 'lodash';

let $user = document.querySelector("#user");
let $email = document.querySelector("#email");
let $password = document.querySelector("#password");
let $confirmPassword = document.querySelector("#confirm-password");

const $userField = document.querySelector("#userField");

// Regex List
const regexUser = /^[a-zA-Z\d\S]{3,15}$/;

$user.addEventListener("change", (e) =>{

    e.preventDefault();

    if($user.value){

        let $infoUser = document.createElement("p");
        $infoUser.setAttribute("id", "infoUser");
        $infoUser.classList.add("info");
        $userField.appendChild($infoUser);

        if($user.value.length > 3 && 
            $user.value.length < 15 && 
            regexUser.test($user.value) === true ){
            
            $infoUser.classList.add("infoRight");
            $infoUser.innerHTML = `Votre pseudo <strong>${user.value}</strong> est valide`;
            
        } else {
            $infoUser.classList.add("infoWrong");
            $infoUser.innerHTML = `Votre pseudo <strong>${user.value}</strong> doit contenir entre 3 et 15 caractères & ne pas contenir d'espace`;
           
        }
    }
})

/* regex username || ^[a-zA-Z\d\S]{3,15}$ */