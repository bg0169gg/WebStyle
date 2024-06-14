
/* Default values for HTML elements and their CSS classes & IDs */
const mouseleftalert = "The mouse has been moved out of the range of the headbar. TODO: Implement close func on mouse leave"
var headbar_toggle = document.querySelector('.header-button')   /* The main headbar toggle button */
var headbar_element = document.querySelector('headbar')         /* The headbar itself */

function ToggleHeadbar() {
    var headbar_opened = '0'                                        /* Headbar status - 0:closed, 1:opened */
    var headbar_opened_class = 'headbar-open'                       /* The assigned class on open bar */
    var header_opened_class = 'header_headbar-open'                 /* The assigned header class on open bar */
    var header_element = document.querySelector('header')           /* The header itself */
    var headbar_element = document.querySelector('headbar')

    if (headbar_opened = 0) {
        headbar_element.classList.toggle(headbar_opened_class)
        header_element.classList.toggle(header_opened_class)
        var headbar_opened = '1'
    } else if (headbar_opened = 1) {
        headbar_element.classList.toggle(headbar_opened_class)
        header_element.classList.toggle(header_opened_class)
        var headbar_opened = '0'
    }
};
