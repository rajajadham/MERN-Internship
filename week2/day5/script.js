// ================================
// Git & GitHub Day 5
// ================================

// Smooth navigation
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (targetId.startsWith("#")) {
            event.preventDefault();

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});


// Project links
const projectLinks = document.querySelectorAll(".project-card a");

projectLinks.forEach((link) => {
    link.addEventListener("click", (event) => {

        event.preventDefault();

        alert("Project link will be added soon!");
    });
});


// Console information
console.log("Week 2 Day 5");
console.log("Git & GitHub workflow practice completed.");
console.log("Feature branch: feature-projects");