// ========================================
// TASK 1 - CHANGE TEXT COLOR
// ========================================

const colorText = document.getElementById("colorText");

document.getElementById("redBtn").addEventListener("click", function () {
    colorText.style.color = "red";
});

document.getElementById("greenBtn").addEventListener("click", function () {
    colorText.style.color = "green";
});

document.getElementById("blueBtn").addEventListener("click", function () {
    colorText.style.color = "blue";
});


// ========================================
// CHANGE FONT FAMILY
// ========================================

const fontSelect = document.getElementById("fontSelect");

fontSelect.addEventListener("change", function () {
    colorText.style.fontFamily = fontSelect.value;
});


// ========================================
// CHANGE FONT SIZE
// ========================================

let fontSize = 16;

document.getElementById("increaseBtn").addEventListener("click", function () {

    fontSize += 2;

    colorText.style.fontSize = fontSize + "px";
});


document.getElementById("decreaseBtn").addEventListener("click", function () {

    if (fontSize > 10) {
        fontSize -= 2;
    }

    colorText.style.fontSize = fontSize + "px";
});


// ========================================
// FONT STYLE USING MOUSEOVER
// ========================================

const styleText = document.getElementById("styleText");

document.getElementById("boldBtn").addEventListener("mouseover", function () {
    styleText.style.fontWeight = "bold";
});

document.getElementById("italicBtn").addEventListener("mouseover", function () {
    styleText.style.fontStyle = "italic";
});

document.getElementById("underlineBtn").addEventListener("mouseover", function () {
    styleText.style.textDecoration = "underline";
});


// ========================================
// TASK 2 - FORM VALIDATION
// ========================================

const userForm = document.getElementById("userForm");

userForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    const formMessage = document.getElementById("formMessage");


    if (name === "" || email === "") {

        formMessage.textContent = "Please fill all fields.";

        alert("Please fill all fields.");

        return;
    }


    formMessage.textContent = "Form submitted successfully!";

    alert("Form submitted successfully!");

    userForm.reset();
});


// ========================================
// TASK 3 - SIMPLE CALCULATOR
// ========================================

function getNumbers() {

    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    if (num1 === "" || num2 === "") {

        alert("Please enter both numbers.");

        return null;
    }

    return {
        first: Number(num1),
        second: Number(num2)
    };
}


function showResult(result) {

    document.getElementById("calcResult").textContent =
        `Result = ${result}`;
}


// ADD

document.getElementById("addBtn").addEventListener("click", function () {

    const numbers = getNumbers();

    if (numbers === null) {
        return;
    }

    showResult(numbers.first + numbers.second);
});


// SUBTRACT

document.getElementById("subtractBtn").addEventListener("click", function () {

    const numbers = getNumbers();

    if (numbers === null) {
        return;
    }

    showResult(numbers.first - numbers.second);
});


// MULTIPLY

document.getElementById("multiplyBtn").addEventListener("click", function () {

    const numbers = getNumbers();

    if (numbers === null) {
        return;
    }

    showResult(numbers.first * numbers.second);
});


// DIVIDE

document.getElementById("divideBtn").addEventListener("click", function () {

    const numbers = getNumbers();

    if (numbers === null) {
        return;
    }

    if (numbers.second === 0) {

        alert("Cannot divide by zero.");

        return;
    }

    showResult(numbers.first / numbers.second);
});


// ========================================
// BONUS - THEME SWITCHER
// ========================================

document.getElementById("lightBtn").addEventListener("click", function () {

    document.body.classList.remove("dark-mode");

});


document.getElementById("darkBtn").addEventListener("click", function () {

    document.body.classList.add("dark-mode");

});