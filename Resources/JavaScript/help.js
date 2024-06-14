function ScrollBtn_HelpCategories() {
    window.scroll({
        top: 700,
        behavior: "smooth",
    });
}
window.addEventListener('scroll', function() {
    var helpTop = document.querySelector("top");
    helpTop.classList.toggle("top-rounded");
})