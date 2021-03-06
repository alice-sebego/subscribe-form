/**
 * Remove an element of DOM
 * @param {HTMLParagraphElement} element 
 */
const removeElement = (element) => {
    setTimeout(() =>{
        element.remove();
    }, 6000);
}

/**
 * Display password on the user's input
 * @param {HTMLInputElement} input 
 */
const displayPassword = (inputPassword) => {
    inputPassword.type === "password" ? inputPassword.type = "text": inputPassword.type = "password";
}

const removeContent = (content) => {
    setTimeout(()=>{
        content.innerHTML = "";
    }, 1500);
}

export {removeElement, displayPassword, removeContent};