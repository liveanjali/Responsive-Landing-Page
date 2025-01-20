// Replace with your WeatherAPI key
const API_KEY = 'a0251a189b964c008fb112853251601';

async function fetchWeather() {
    const cityInput = document.getElementById('city-input');
    const cityName = cityInput.value.trim();

    if (!cityName) {
        alert('Please enter a city name!');
        return;
    }

    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');

    cityName.textContent = data.location.name;
    temperature.textContent = `Temperature: ${data.current.temp_c}°C`;
    description.textContent = `Weather: ${data.current.condition.text}`;

    weatherInfo.classList.remove('hidden');
}
