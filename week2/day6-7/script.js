// ==========================================
// OPENWEATHER API KEY
// ==========================================

const API_KEY = "9dda5b3934b12ff0502cc49801504df5";


// ==========================================
// DOM ELEMENTS
// ==========================================

const weatherForm = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const loading = document.getElementById("loading");
const errorMessage = document.getElementById("errorMessage");
const weatherResult = document.getElementById("weatherResult");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const weatherCondition = document.getElementById("weatherCondition");
const weatherIcon = document.getElementById("weatherIcon");

const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const feelsLike = document.getElementById("feelsLike");


// ==========================================
// FETCH WEATHER
// ==========================================

async function fetchWeather(city) {

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);

    if (!response.ok) {

        if (response.status === 404) {
            throw new Error("City not found. Please check the city name.");
        }

        if (response.status === 401) {
            throw new Error("Invalid API key. Please check your OpenWeatherMap API key.");
        }

        throw new Error("Unable to fetch weather data.");
    }

    return await response.json();
}


// ==========================================
// DISPLAY WEATHER
// ==========================================

function displayWeather(data) {

    const weather = data.weather[0];

    cityName.textContent = `${data.name}, ${data.sys.country}`;

    temperature.textContent =
        Math.round(data.main.temp);

    weatherCondition.textContent =
        weather.description;

    humidity.textContent =
        `${data.main.humidity}%`;

    windSpeed.textContent =
        `${data.wind.speed} m/s`;

    feelsLike.textContent =
        `${Math.round(data.main.feels_like)}°C`;

    weatherIcon.src =
        `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;

    weatherIcon.alt =
        weather.description;

    weatherResult.classList.remove("hidden");

    changeBackground(weather.main);
}


// ==========================================
// WEATHER BACKGROUND
// ==========================================

function changeBackground(weatherType) {

    if (weatherType === "Rain") {

        document.body.style.background =
            "linear-gradient(135deg, #314755, #26a0da)";

    } else if (weatherType === "Clear") {

        document.body.style.background =
            "linear-gradient(135deg, #f6d365, #fda085)";

    } else if (
        weatherType === "Clouds"
    ) {

        document.body.style.background =
            "linear-gradient(135deg, #667db6, #0082c8)";

    } else if (
        weatherType === "Thunderstorm"
    ) {

        document.body.style.background =
            "linear-gradient(135deg, #232526, #414345)";

    } else if (
        weatherType === "Snow"
    ) {

        document.body.style.background =
            "linear-gradient(135deg, #83a4d4, #b6fbff)";

    } else {

        document.body.style.background =
            "linear-gradient(135deg, #141e30, #243b55)";
    }
}


// ==========================================
// FORM SUBMIT
// ==========================================

weatherForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const city = cityInput.value.trim();

    // Validate input
    if (!city) {

        showError("Please enter a city name.");

        return;
    }


    // Show loading
    loading.classList.remove("hidden");

    errorMessage.classList.add("hidden");

    weatherResult.classList.add("hidden");

    searchBtn.disabled = true;


    try {

        const data = await fetchWeather(city);

        displayWeather(data);

    } catch (error) {

        showError(error.message);

    } finally {

        loading.classList.add("hidden");

        searchBtn.disabled = false;
    }
});


// ==========================================
// ERROR HANDLING
// ==========================================

function showError(message) {

    errorMessage.textContent = message;

    errorMessage.classList.remove("hidden");

    weatherResult.classList.add("hidden");
}


// ==========================================
// DEFAULT CITY
// ==========================================

// Change this if you want another starting city.
cityInput.value = "Delhi";