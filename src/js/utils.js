/**
 * Remove an element of DOM
 * @param {HTMLParagraphElement} element 
 */
const removeElement = (element) => {
    setTimeout(() =>{
        element.remove();
    }, 5500);
}

/**
 * Create a button on labels which handle password input
 * @param {HTMLButtonElement} element 
 */
const createBtnDisplayPassword = (element) => {
    const $btnEye = document.createElement("button");
    $btnEye.setAttribute("type", "button");
    $btnEye.setAttribute("id", "showPassword");
    $btnEye.innerHTML = `<i class="fas fa-eye"></i>`;
    element.appendChild($btnEye);
}

/**
 * Display password on the user's input
 * @param {HTMLInputElement} input 
 */
const displayPassword = (input) => {
    input.type === "password" ? input.type = "text": input.type = "password";
}

export {removeElement, createBtnDisplayPassword, displayPassword};