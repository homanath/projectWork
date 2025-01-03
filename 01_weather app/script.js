const apikey = "64887ece5738dcea4d4cfbb980d6aaf0";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Function to check weather
async function checkWeather(city) {
  try {
    // Fetch data from API
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    // Handle invalid city (404)
    if (response.status === 404) {
      document.querySelector(".weather").style.display = "none";
      document.querySelector(".error").style.display = "block";
      return; // Stop further execution
    }

    // Parse the response data
    const data = await response.json();

    // Update UI with weather data
    document.querySelector(".city").innerHTML = data.name;
    
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    // Update the weather icon
    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "images/mist.png";
    } else {
      weatherIcon.src = "images/default.png"; // Fallback icon
    }

    // Show weather section and hide error
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "block";
  }
}

// Event listener for the search button
searchBtn.addEventListener("click", () => {
  const city = searchBox.value.trim();
  if (city === "") {
    alert("Please enter a city name");
    return;
  }
  checkWeather(city);
});
