/* MOBILE NAVIGATION */
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
        const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
        menuBtn.setAttribute("aria-expanded", String(!isExpanded));
        navLinks.classList.toggle("show", !isExpanded);
    });

    navLinks.addEventListener("click", function (event) {
        if (event.target.closest("a")) {
            navLinks.classList.remove("show");
            menuBtn.setAttribute("aria-expanded", "false");
        }
    });
}