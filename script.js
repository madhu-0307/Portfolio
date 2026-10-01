/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


/* =========================
   CLOSE MOBILE MENU
========================= */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert(
        "Thank you for contacting me! " +
        "Your message has been received."
    );

    contactForm.reset();

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    links.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
