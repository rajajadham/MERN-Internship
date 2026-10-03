// ==========================================
// TASK 1 - Random User Card
// ==========================================

const singleUser = document.getElementById("singleUser");
const newUserBtn = document.getElementById("newUserBtn");

async function loadSingleUser() {

    try {

        singleUser.innerHTML = "<p>Loading user...</p>";

        const response = await fetch("https://randomuser.me/api");

        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }

        const data = await response.json();

        const user = data.results[0];

        const fullName = `${user.name.first} ${user.name.last}`;

        singleUser.innerHTML = `
            <img src="${user.picture.large}" alt="${fullName}">
            <h3>${fullName}</h3>
            <p>${user.email}</p>
        `;

    } catch (error) {

        singleUser.innerHTML = `
            <p>Unable to load user.</p>
        `;

        console.error("Error:", error);
    }
}


// Fetch new random user
newUserBtn.addEventListener("click", loadSingleUser);


// ==========================================
// TASK 2 + MINI CHALLENGE
// User Directory
// ==========================================

const usersGrid = document.getElementById("usersGrid");
const refreshBtn = document.getElementById("refreshBtn");

async function loadUsers() {

    try {

        usersGrid.innerHTML = "<p>Loading users...</p>";

        const response = await fetch(
            "https://randomuser.me/api/?results=5"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        usersGrid.innerHTML = "";

        data.results.forEach((user) => {

            const fullName = `${user.name.first} ${user.name.last}`;

            const userCard = document.createElement("div");

            userCard.classList.add("user-card");

            userCard.innerHTML = `
                <img src="${user.picture.large}" alt="${fullName}">
                <h3>${fullName}</h3>
                <p>${user.email}</p>
            `;

            usersGrid.appendChild(userCard);
        });

    } catch (error) {

        usersGrid.innerHTML = `
            <p>Unable to load users. Please try again.</p>
        `;

        console.error("Error:", error);
    }
}


// Refresh users
refreshBtn.addEventListener("click", loadUsers);


// ==========================================
// INITIAL LOAD
// ==========================================

loadSingleUser();
loadUsers();