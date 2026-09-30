// ========================================
// CONTACT FORM
// ========================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();


    if (name === "" || email === "" || message === "") {

        alert("Please fill in all the fields.");

        return;
    }


    alert(`Thank you, ${name}! Your message has been received.`);

    contactForm.reset();

});


// ========================================
// DARK / LIGHT THEME
// ========================================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {

        themeToggle.textContent = "☀️";

    } else {

        themeToggle.textContent = "🌙";

    }

});