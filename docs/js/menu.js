const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");

const mobileLinks = document.querySelectorAll(
    ".mobile-nav__link, .mobile-nav__reserve"
);


menuButton.addEventListener("click", function () {

    const isOpen = mobileNav.classList.toggle(
        "mobile-nav--open"
    );

    menuButton.classList.toggle(
        "menu-button--open",
        isOpen
    );

    menuButton.setAttribute(
        "aria-expanded",
        isOpen
    );

});


mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileNav.classList.remove(
            "mobile-nav--open"
        );

        menuButton.classList.remove(
            "menu-button--open"
        );

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});