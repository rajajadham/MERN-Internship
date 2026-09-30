// =====================================
// TASK 1 - Normal Parameterized Function
// =====================================

// Function to calculate area of rectangle
function rectangleArea(length, width) {
    return length * width;
}


// Display rectangle area
function showRectangleArea() {

    const length = 10;
    const width = 5;

    const area = rectangleArea(length, width);

    document.getElementById("areaResult").textContent =
        `Area of Rectangle = ${area} square units`;
}


// =====================================
// TASK 1 - Arrow Function
// =====================================

// Arrow function to check voter eligibility
const checkEligibility = (age) => {
    return age > 18 ? "Eligible to Vote" : "Not Eligible to Vote";
};


// Display voter result
function checkVoter() {

    const age = Number(document.getElementById("ageInput").value);

    const result = checkEligibility(age);

    document.getElementById("voterResult").textContent = result;
};


// =====================================
// TASK 2 - Dynamic User Name
// =====================================

// Ask user for name when page loads
const userName = prompt("What is your name?");


// Display name on webpage
if (userName) {

    document.getElementById("welcomeMessage").textContent =
        `Welcome, ${userName}!`;

    document.getElementById("nameText").textContent =
        "Glad to have you here.";

} else {

    document.getElementById("welcomeMessage").textContent =
        "Welcome, Guest!";

}