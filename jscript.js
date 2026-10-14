const loginLink = document.getElementById("login-link");
const loginModal = document.getElementById("login-modal");
const logoutLink = document.getElementById("logout-link");
if (localStorage.getItem("isLoggedIn") === "true") {
    loginLink.style.display = "none";
    logoutLink.style.display = "inline";
}

loginLink.addEventListener("click", function(event) {
    event.preventDefault();
    loginModal.style.display = "flex";
});

const loginForm = document.getElementById("login-form");


loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    loginLink.style.display = "none";
    logoutLink.style.display = "inline";

    loginModal.style.display = "none";
});

logoutLink.addEventListener("click", function(event) {
    event.preventDefault();

    localStorage.removeItem("isLoggedIn");

    loginLink.style.display = "inline";
    logoutLink.style.display = "none";
});

const closeLogin = document.getElementById("close-login");

closeLogin.addEventListener("click", function() {
    loginModal.style.display = "none";
});

const fleetLinks = document.querySelectorAll(".fleet-nav a");
const fleetCategories = document.querySelectorAll(".fleet-category");

fleetLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {
        event.preventDefault();

        const selectedCategory = link.getAttribute("href").substring(1);

        // First, hide all categories
        fleetCategories.forEach(function(category) {
            category.classList.remove("active");
        });

        // If All Vehicles was clicked, show everything
        if (selectedCategory === "all") {

            fleetCategories.forEach(function(category) {
                category.classList.add("active");
            });

        } else {

            // Otherwise, show only the selected category
            document.getElementById(selectedCategory).classList.add("active");

        }

    });

});