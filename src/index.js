import './styles.css';

// Display Incorrect Search
function displayErrorMessage (status) {
  const errorMessage = document.querySelector('.error-msg'); 

  if (status === true){
    errorMessage.style.display = 'block';

  } else {
    errorMessage.style.display = 'none'; 

  }
}

// Update Weather UI
function updateWeatherUI(data) {
  displayErrorMessage(false);

  const { feelslike_f: feelsLikeF, wind_mph: wind, humidity, temp_f: temperatureF } = data.current;
  const { name: city } = data.location;
  const { text: forecast } = data.current.condition;

  document.getElementById('feel').textContent = `${feelsLikeF}`;
  document.getElementById('wind').textContent = `${wind} mph`;
  document.getElementById('humidity').textContent = `${humidity}%`;
  document.getElementById('degree').textContent = `${temperatureF}`;
  document.getElementById('forecast').textContent = `${forecast.toUpperCase()}`;
  document.getElementById('city').textContent = `${city.toUpperCase()}`;
}

// Retrieve Current Weather Data
async function handleDataQuery(inputtedCity) {
  const apiKey = 'bb573b7d76e6418981883643241104';
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputtedCity}`;

  // Attempt to Fetch Data
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    updateWeatherUI(data);
  } catch (e) {
    console.log('Failed to fetch weather data:', e);
    displayErrorMessage(true);
  }
}

// Retrieve User Input
function retrieveData() {
  const myButton = document.querySelector('.submission');
  handleDataQuery();
}

document.addEventListener('DOMContentLoaded', () => {
  handleDataQuery('Vancouver');

    const myButton = document.querySelector('.submission');
  
    myButton.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const inputtedCity = myButton.value;
            handleDataQuery(inputtedCity);
        }
    });
});
  