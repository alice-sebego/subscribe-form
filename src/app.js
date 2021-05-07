import _ from 'lodash';

let $user = document.querySelector("#user");
let $email = document.querySelector("#email");
let $password = document.querySelector("#password");
let $confirmPassword = document.querySelector("#confirm-password");

// Regex
const regexUser = /^[a-zA-Z\d\S]{3,15}$/;

$user.addEventListener("change", (e) =>{
    
    e.preventDefault();

    if($user.value){
        if($user.value.length > 3 && $user.value.length < 15 && regexUser.test($user.value) === true ){
            console.log("Yep, username length and regex "+ $user.value + " is OK")
        } else {
            console.log("Your username must have a length beetween 3 and 15 strings & doesn't have a space");
        }
    }
})

/* regex username || ^[a-zA-Z\d\S]{3,15}$ */