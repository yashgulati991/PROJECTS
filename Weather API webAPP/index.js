async function fetchWeather(city) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e578550928msh8698cd8ef8a863bp1510e7jsn228e7a50559b',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
  
      // Update the IDs and textContent assignments for the elements
      document.getElementById('temperature').textContent = `${result.temp}°C`;
      document.getElementById('feels_like').textContent = `Feels like ${result.feels_like}°C`;
      document.getElementById('min_temp').textContent = `Min Temp ${result.min_temp}°C`;
      document.getElementById('max_temp').textContent = `Max Temp ${result.max_temp}°C`;
      document.getElementById('humidity').textContent = `${result.humidity}%`;
      document.getElementById('wind-speed').textContent = `${result.wind_speed} km/hr`;
      document.getElementById('wind-degree').textContent = `Wind Degrees ${result.wind_deg}`;
      document.getElementById('sunrise').textContent = `Sunrise ${result.sunrise}`;
      document.getElementById('sunset').textContent = `Sunset ${result.sunset}`;
      document.getElementById('cloud_pct').textContent = `Cloud Percentage ${result.cloud_pct}%`;
    } catch (error) {
      console.error(error);
    }
  }
  
  function fetchFaridabadWeather() {
    fetchWeather('Faridabad');
    document.getElementById('Temperature-fbd').textContent=`Temperature${result.temp}°C`;
  }
  
  function fetchGurgaonWeather() {
    fetchWeather('Gurgaon');
    document.getElementById('Temperature-ggn').textContent=`Temperature${result.temp}°C`;
  }
  
  
  function fetchNoidaWeather() {
    fetchWeather('Noida');
    document.getElementById('Temperature-noida').textContent=`Temperature${result.temp}°C`;
   
  }
  
  document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const city = document.getElementById('search-form').querySelector('input').value;
    document.getElementById('city-name').textContent = city;
    fetchWeather(city);
  });
  
  fetchWeather('Delhi');
  fetchFaridabadWeather();
  fetchGurgaonWeather();
  fetchNoidaWeather();
  