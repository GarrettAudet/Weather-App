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
    const feelsLikeF = data.current.feelslike_f;
    const wind = data.current.wind_mph;
    const humidity = data.current.humidity; 
    const temperatureF = data.current.temp_f;
    const city = data.location.name;
    const forecast = data.current.condition.text;
  } catch (e) {
    console.log('Failed to fetch weather data:', e);
  }
}

// Retrieve User Input
function retrieveData() {
  const myButton = document.querySelector('.submission');
  handleDataQuery();
}

document.addEventListener('DOMContentLoaded', () => {
    const myButton = document.querySelector('.submission');
  
    myButton.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const inputtedCity = myButton.value;
            handleDataQuery(inputtedCity);
        }
    });
});
  