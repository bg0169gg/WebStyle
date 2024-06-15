
// Logic for scroll-down button on homepage

function ScrollBtn_Categories() {
    window.scroll({
        top: 700,
        behavior: "smooth",
    });
}

// Sidebar Open and close function

function SidebarToggle() {
    var Sidebar_element = document.querySelector('sidebar');
    var Sidebar_Active = false;
    var Sidebar_Active_class = 'page-sidebar_Active';
    if (Sidebar_Active === false) {
        Sidebar_element.classList.toggle(Sidebar_Active_class);
        var Sidebar_Active = true;
    } else if (Sidebar_Active === true) {
        Sidebar_element.classList.toggle(Sidebar_Active_class);
        var Sidebar_Active = false;
    }
}

// Search Engine Logic and functions

function SearchEngineCmd() {
    const SearchQuery = document.getElementById("MainSearchEngineBox").value.toLowerCase();
    if (SearchQuery) {
        console.log("Starting search for:", SearchQuery);
    } else {
        console.log("Empty Search Bar!");
    }
}
var HomepageSearchbox = document.querySelector("HomepageSearchbox");
const SearchEngineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            HomepageSearchbox.classList.add("HeaderSearchBoxActive");
            console.log('Homepage Search out of viewport');
        } else {
            HomepageSearchbox.classList.remove("HeaderSearchBoxActive");
            console.log('Homepage Search in viewport');
        }
    });
});
SearchEngineObserver.observe(HomepageSearchbox);

