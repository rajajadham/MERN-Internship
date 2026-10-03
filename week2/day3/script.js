// ==========================================
// TASK 1 - Simulate API Call with setTimeout
// ==========================================

function fakeAPICall() {
    console.log("Fetching user details...");

    setTimeout(() => {
        console.log("User data received ✅");

        // Nested timeout to show asynchronous flow
        setTimeout(() => {
            console.log("Processing Data...");

            setTimeout(() => {
                console.log("Data processing completed ✅");
            }, 1000);

        }, 1000);

    }, 2000);
}

console.log("===== TASK 1 =====");
fakeAPICall();


// ==========================================
// TASK 2 - Promise Example
// ==========================================

const simulateFetch = new Promise((resolve, reject) => {

    const isOnline = true;

    setTimeout(() => {
        if (isOnline) {
            resolve("Data fetched successfully ✅");
        } else {
            reject("Network error ❌");
        }
    }, 1500);
});

simulateFetch
    .then((msg) => console.log(msg))
    .catch((err) => console.error(err));


// ==========================================
// TASK 3 - Async/Await with Fetch
// ==========================================

async function loadPosts() {

    try {
        console.log("Fetching posts...");

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        const posts = await response.json();

        console.log("Latest Posts:", posts);

    } catch (error) {
        console.error("Error loading posts:", error);
    }
}

console.log("\n===== TASK 3 =====");
loadPosts();


// ==========================================
// MINI CHALLENGE - Weather Fetcher
// ==========================================

async function fetchWeather() {

    try {
        console.log("\n===== WEATHER FETCHER =====");
        console.log("Fetching weather...");

        const response = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current_weather=true"
        );

        if (!response.ok) {
            throw new Error("Unable to fetch weather data");
        }

        const data = await response.json();

        const temperature = data.current_weather.temperature;
        const windSpeed = data.current_weather.windspeed;

        console.log(`Current Temp: ${temperature}°C`);
        console.log(`Wind Speed: ${windSpeed} km/h`);

    } catch (error) {
        console.error("Weather Error:", error.message);
    }
}

fetchWeather();