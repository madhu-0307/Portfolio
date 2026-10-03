// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


// PURPLE CURSOR GLOW

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {

    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;

});


// ACTIVE NAVIGATION LINK

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                links.forEach(link => {
                    link.classList.remove("active");
                });

                const current =
                    document.querySelector(
                        `.nav-links a[href="#${entry.target.id}"]`
                    );

                if (current) {
                    current.classList.add("active");
                }

            }

        });

    },

    {
        threshold: 0.35
    }

);


sections.forEach(section => {

    observer.observe(section);

});
