/**
 * Remove an element of DOM
 * @param {HTMLParagraph} element 
 */
const removeElement = (element) => {
    setTimeout(() =>{
        element.remove();
    }, 5500);
}

export {removeElement};