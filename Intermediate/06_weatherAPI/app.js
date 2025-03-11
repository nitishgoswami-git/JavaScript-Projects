const api_key = ""

const date = document.querySelector('#date');
const city = document.querySelector('#city');
const temp = document.querySelector('#temp');
const tempImg = document.querySelector('#temp-img'); // Make sure it's an <img> element
const description = document.querySelector('#description');
const tempMax = document.querySelector('#temp-max');
const tempMin = document.querySelector('#temp-min');

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
let dateObj = new Date();
let month = monthNames[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate(); // No need to subtract 1
let year = dateObj.getUTCFullYear();

date.innerHTML = `${month} ${day}, ${year}`;

const getWeather = async () => {
    try {
        const cityName = document.getElementById('search-bar-input').value;
        const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&units=metric`
            , {
            headers: { Accept: "application/json" }
        });

        const weatherDataJson = await weatherData.json();
        console.log(weatherDataJson); 
        if (weatherDataJson.cod !== 200) {
            throw new Error(weatherDataJson.message);
        }

        city.innerHTML = `${weatherDataJson.name}`;
        description.innerHTML = `${weatherDataJson.weather[0].main}`;
        tempImg.src = `http://openweathermap.org/img/wn/${weatherDataJson.weather[0].icon}.png`; // If <img> element
        temp.innerHTML = `<h2>${Math.round(weatherDataJson.main.temp)}°C</h2>`;
        tempMax.innerHTML = `${Math.round(weatherDataJson.main.temp_max)}°C`;
        tempMin.innerHTML = `${Math.round(weatherDataJson.main.temp_min)}°C`;
    } catch (e) {
        console.error("Error fetching weather data:", e.message);
    }
};

document.querySelector("#search-icon").addEventListener("click",getWeather);