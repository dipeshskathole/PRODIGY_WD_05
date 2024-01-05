//declaring constants for api and api keys
const apiKey = "3671e524d8bd902883210a1e22ec118b";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//declaring constants for search boxes

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

//function for updating the api url based on user input

//checkWeather(searchbox.value);
searchbtn.addEventListener("click", () => {
  const city = searchbox.value;
  checkWeather(city);
});

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    if (response.status == 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    } else {
      var data = await response.json();
      console.log(data);
      document.querySelector(".error").style.display = "none";
      document.querySelector(".weather").style.display = "block";

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML =
        data.main.humidity + "%";
      document.querySelector(".wind").innerHTML =
        data.wind.speed + "km/h";
      //if else statements selecting the correct function and update the weather logo
      if (data.weather[0].main == "Clouds") {
        const weatherIcon = document.querySelector(".weather-icon");
        weatherIcon.src = "clouds.png";
      } else if (data.weather[0].main == "Clear") {
        const weatherIcon = document.querySelector(".weather-icon");
        weatherIcon.src = "clear.png";
      } else if (data.weather[0].main == "Rain") {
        const weatherIcon = document.querySelector(".weather-icon");
        weatherIcon.src = "rain.png";
      } else if (data.weather[0].main == "Drizzle") {
        const weatherIcon = document.querySelector(".weather-icon");
        weatherIcon.src = "drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        const weatherIcon = document.querySelector(".weather-icon");
        weatherIcon.src = "mist.png";
      }
      //for displaying the output after the input has been given by the user
      document.querySelector(".weather").style.display = "block";
    }
  }
}
