// ================================
// SCROLL REVEAL ANIMATION
// ================================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});


// ================================
// NAVBAR ACTIVE LINK
// ================================

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    document.querySelectorAll("section").forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// ================================
// BUTTON CLICK MESSAGE
// ================================

const projectButtons = document.querySelectorAll(".project-btn");

projectButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

        if (button.getAttribute("href") === "#") {

            event.preventDefault();

            alert(
                "Project link will be added soon!"
            );

        }

    });

});