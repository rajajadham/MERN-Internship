// ========================================
// TASK 1 - OBJECT DESTRUCTURING
// ========================================

const car = {
    brand: "Tesla",
    model: "Model 3",
    color: "white"
};

// Extract brand and model
const { brand, model } = car;

console.log("Task 1:");
console.log("Brand:", brand);
console.log("Model:", model);


// ========================================
// TASK 2 - SPREAD OPERATOR
// ========================================

const fruits = ["apple", "banana"];

const moreFruits = ["cherry", "mango"];

// Merge both arrays
const allFruits = [...fruits, ...moreFruits];

console.log("\nTask 2:");
console.log("All Fruits:", allFruits);


// ========================================
// TASK 2 - REST OPERATOR
// ========================================

// Function accepts any number of fruits
const printFruits = (...fruits) => {

    fruits.forEach((fruit) => {
        console.log(fruit);
    });

};

console.log("Fruits using Rest:");

printFruits("apple", "banana", "cherry", "mango");


// ========================================
// TASK 3 - TEMPLATE LITERALS
// ========================================

const name = "Priya";
const course = "JavaScript Mastery";

const message = `Hello ${name}! Welcome to ${course}.`;

console.log("\nTask 3:");
console.log(message);


// ========================================
// TASK 4 - ES6 CODE REFACTOR
// ========================================

const user = {
    name: "Aman",
    age: 22
};

const greet = (user) => {
    return `Hello ${user.name}, you are ${user.age} years old.`;
};

console.log("\nTask 4:");
console.log(greet(user));


// ========================================
// MINI CHALLENGE - ES6 CODE TRANSFORMER
// ========================================

const numbers = [1, 2, 3];

const doubled = numbers.map((n) => n * 2);

console.log("\nMini Challenge:");
console.log(doubled);


// ========================================
// BONUS - DESTRUCTURING FUNCTION
// ========================================

const student = {
    studentName: "Raja",
    courseName: "BCA"
};

const showStudent = ({ studentName, courseName }) => {
    console.log(
        `Student: ${studentName}, Course: ${courseName}`
    );
};

showStudent(student);