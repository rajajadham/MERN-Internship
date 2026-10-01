// ==========================================
// TASK 1 - map() and filter()
// ==========================================

const prices = [120, 250, 300, 450, 600];

// Filter prices greater than 250
const filteredPrices = prices.filter((price) => price > 250);

// Apply 10% discount
const discountedPrices = filteredPrices.map((price) => price * 0.90);

console.log("===== TASK 1 =====");
console.log("Original Prices:", prices);
console.log("Filtered Prices:", filteredPrices);
console.log("Discounted Prices:", discountedPrices);


// ==========================================
// TASK 2 - reduce()
// ==========================================

const expenses = [
    { category: "Food", amount: 300 },
    { category: "Transport", amount: 150 },
    { category: "Shopping", amount: 400 }
];

// Calculate total expense
const totalExpense = expenses.reduce((total, expense) => {
    return total + expense.amount;
}, 0);

console.log("\n===== TASK 2 =====");
console.log(`Total Expense: ₹${totalExpense}`);


// ==========================================
// TASK 3 - map() + filter() + reduce()
// ==========================================

const scores = [45, 80, 90, 35, 60, 75];

// Filter passing scores
const passingScores = scores.filter((score) => score >= 50);

// Add 10 bonus marks
const bonusScores = passingScores.map((score) => score + 10);

// Calculate total
const totalScore = bonusScores.reduce((total, score) => {
    return total + score;
}, 0);

console.log("\n===== TASK 3 =====");
console.log("Passing Scores:", passingScores);
console.log("Scores After Bonus:", bonusScores);
console.log("Total Score:", totalScore);


// ==========================================
// MINI CHALLENGE - Student Score Analyzer
// ==========================================

const students = [
    { name: "Aman", marks: 85 },
    { name: "Sara", marks: 42 },
    { name: "Riya", marks: 68 },
    { name: "John", marks: 49 }
];

// Filter students who passed
const passedStudents = students.filter((student) => student.marks >= 50);

// Add 5 bonus marks
const finalStudents = passedStudents.map((student) => {
    return {
        ...student,
        marks: student.marks + 5
    };
});

// Display each student's final score
console.log("\n===== STUDENT SCORE ANALYZER =====");

finalStudents.forEach((student) => {
    console.log(`${student.name}: ${student.marks}`);
});

// Calculate class total
const classTotal = finalStudents.reduce((total, student) => {
    return total + student.marks;
}, 0);

// Calculate class average
const classAverage = classTotal / finalStudents.length;

console.log(`Class Average: ${classAverage}`);