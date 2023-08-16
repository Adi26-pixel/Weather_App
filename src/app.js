function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "38cc12b312104o45t5c1faaa8bf9b6c0";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=38cc12b312104o45t5c1faaa8bf9b6c0&units=metric`;

axios.get(apiUrl).then(displayTemperature);
