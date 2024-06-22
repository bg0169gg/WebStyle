

// Creating elements

document.addEventListener("DOMContentLoaded", function() {
    //Generate Header
    $('header').append('<header-left>');
    $('header').append('<header-right>');
    $('header-left').append('<div class="header-sidebar-toggle"><button class="header-button" onclick="SidebarToggle()"><i class="bx bx-menu-alt-left"></i></button></div>');
    $('header-left').append('<div class="header-title"><a href="/" id="header-title">WebStyle</a></div>');
    $('header-right').append('<div class="header-searchtoggle"><button class="header-button" onclick=ShowSearchBox()><i class="bx bx-search"></i></button></div>');
    $('header-right').append('<div class="header-user"><a class="header-button" href="/user/"><i class="bx bx-user-circle"></i></a></div>');
    
    // Generate Sidebar
    $('.page-sidebar').append('<sidebar-module class="page-sidebar-module">');
    $('.page-sidebar-module').append('<sidebar-header>');
    $('sidebar-header').append('<button class="sidebar-button sidebar-closebtn" onclick="SidebarToggle()">');
    $('.sidebar-closebtn').append('<i class="bx bx-chevron-left"></i>');
    $('sidebar-header').append('<p>Close</p>');

    $('.page-sidebar-module').append('<p id="page-sidebar-submodule">Getting Started</p>');
    $('.page-sidebar-module').append('<submodule class="page-sidebar-submodule" id="sidebar-submodule-1">');
    $('#sidebar-submodule-1').append('<a href="/quickstart/" rel="noopener noreferrer">QuickStart™ Guide</a>');
    $('#sidebar-submodule-1').append('<a href="/quickstart/html.html" rel="noopener noreferrer">What is HTML?</a>');
    $('#sidebar-submodule-1').append('<a href="/quickstart/css.html" rel="noopener noreferrer">What is CSS?</a>');
    $('#sidebar-submodule-1').append('<a href="/quickstart/js.html" rel="noopener noreferrer">What is JavaScript?</a>');
    $('#sidebar-submodule-1').append('<a href="/quickstart/localhost.html" rel="noopener noreferrer">Previewing your site</a>');

    $('.page-sidebar-module').append('<p id="page-sidebar-submodule">Files &amp; Demos</p>');
    $('.page-sidebar-module').append('<submodule class="page-sidebar-submodule" id="sidebar-submodule-2">');
    $('#sidebar-submodule-2').append('<a href="/demos/html.html" rel="noopener noreferrer">HTML 5 QuickStart™ files</a>');
    $('#sidebar-submodule-2').append('<a href="/demos/css.html" rel="noopener noreferrer">CSS 3 QuickStart™ files</a>');
    $('#sidebar-submodule-2').append("<a href='/demos/js.html' target='_blank' rel='noopener noreferrer'>JavaScript QuickStart™ files</a>");
    $('#sidebar-submodule-2').append('<a href="/demos/" rel="noopener noreferrer">Templates from the web</a>');

    $('.page-sidebar-module').append('<p id="page-sidebar-submodule">Element references</p>');
    $('.page-sidebar-module').append('<submodule class="page-sidebar-submodule" id="sidebar-submodule-3">');
    $('#sidebar-submodule-3').append('<a href="/reference/html.html" rel="noopener noreferrer">HTML Elements</a>');
    $('#sidebar-submodule-3').append('<a href="/reference/css.html" rel="noopener noreferrer">CSS Properties</a>');
    $('#sidebar-submodule-3').append('<a href="/reference/js.html" rel="noopener noreferrer">JavaScript functions</a>');
    $('#sidebar-submodule-3').append('<a href="/reference/" rel="noopener noreferrer">Applying properties and functions</a>');

    $('.page-sidebar-module').append('<p id="page-sidebar-submodule">Getting your project on the web</p>');
    $('.page-sidebar-module').append('<submodule class="page-sidebar-submodule" id="sidebar-submodule-4">');
    $('#sidebar-submodule-4').append('<a href="/web/github.html" rel="noopener noreferrer">Uploading on GitHub</a>');
    $('#sidebar-submodule-4').append('<a href="/web/local.html" rel="noopener noreferrer">Local Web Hosting</a>');
    $('#sidebar-submodule-4').append('<a href="/web/third-party.html" rel="noopener noreferrer">3rd party Web Hosting </a>');

    // $('.page-sidebar-module').append('<button onclick="TestFunc()" style="display: none;">Test jQuery.append func()</button>');
   
    // Scroll Down Button
    $('.site-top').append('<button id="ScrollDownButton" onclick="ScrollBtn_Categories()">');
    $('#ScrollDownButton').append('<i id="ScrollDownButton-icon" class="bx bxs-chevron-down bx-fade-down"></i>');
    $('#ScrollDownButton').append('<p id="ScrollDownButton-text">Scroll down for more...</p>');
   
    // QuickStart™ ViewEngine Control Panel
    $('.QSVE-ControlPanel').append('<button class="QSVE-ToggleBtn" onclick="QSVE_ToggleViewEngineComponent()">Show changes</button>');
    $('.QSVE-ControlPanel').append('<button class="QSVE-ToggleBtn" onclick="QSVE_ResetViewEngine()">Reset Changes</button>');
    
    // Profile Page Welcome Screen
    $('userPropertiesSidebar').append('<usersettings-update-notice><p>Account options apply only for this session.<br>User accounts and preferences coming later this year!</p></usersettings-update-notice>')
    
    // Empty / In Development pages redirect button
    $('.page-ConstructionWarning').append('<p>Redirecting to page...</p>')
    setTimeout(function() {
        $('.page-ConstructionWarning').append('<a href="/error.html" target="noopener noreferer">Click to redirect</a>')
    }, 1250)
});

// Sidebar Open and close function

function SidebarToggle() {
    var Sidebar_element = document.querySelector('sidebar');
    var Sidebar_Active = false;
    var Sidebar_Active_class = 'page-sidebar_Active';

    if (Sidebar_Active === false) {
        Sidebar_element.classList.toggle(Sidebar_Active_class);
        var Sidebar_Active = true;
    } else if (Sidebar_Active === true) {
        Sidebar_element.className.toggle(Sidebar_Active_class);
        var Sidebar_Active = false;
    };
};

// Logic for scroll-down button on homepage

function ScrollBtn_Categories() {
    window.scroll({
        top: 700,
        behavior: "smooth",
    });
};

// Search Engine Logic and functions

function SearchEngineCmd() {
    const SearchQuery = document.getElementById("MainSearchEngineBox").value.toLowerCase();
    const search_results = document.querySelector('SearchResultsRoot');
    if (SearchQuery) {
        SearchEngineInvoke(SearchQuery);
    } else if (!SearchQuery.trim()) {
        search_results.innerHTML = ''; // Clear results if input is empty
    } else {
        console.log("Empty Search Bar!");
    }
};

async function loadXML() {
    const response = await fetch('/Resources/page-library.xml');
    const xmlText = await response.text();
    const parser = new DOMParser();
    return parser.parseFromString(xmlText, 'application/xml');
}

async function SearchEngineInvoke(SearchQuery) {
    const query = SearchQuery;
    const keywordsArray = query.split(/\s+/);
    const xmlDoc = await loadXML();
    const pages = xmlDoc.getElementsByTagName('page');
    const search_results = document.querySelector('SearchResultsRoot');
    search_results.classList.remove("SearchResultsRoot-Active");
    search_results.innerHTML = ''; // Clear previous results

    Array.from(pages).forEach(page => {
        const keywords = page.getElementsByTagName('keywords')[0].textContent.toLowerCase();
        const title = page.getElementsByTagName('title')[0].textContent;
        const url = page.getElementsByTagName('url')[0].textContent;
        const pageContainsAllKeywords = keywordsArray.every(keyword => keywords.includes(keyword));

        if (pageContainsAllKeywords) {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.innerHTML = `<a class="SearchResultEntity" href="${url}">${title}</a>`;

            search_results.classList.add("SearchResultsRoot-Active");
            search_results.appendChild(resultItem);
        }
    });

    if (search_results.innerHTML === '') {
        search_results.classList.add("SearchResultsRoot-Active");
        search_results.innerHTML = '<p id="searchresults-null">No results found.</p>';
    }
}
