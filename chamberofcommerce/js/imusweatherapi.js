//Weather Condition
const wboxURL = "https://api.openweathermap.org/data/2.5/onecall?lat=14.41&lon=120.94&exclude=minutely&appid=22a251b90baf680bdd0ab38772b58b4d";
fetch(wboxURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    console.log(jsonObject);
    document.getElementById('currentweathercondition').textContent = jsonObject.current.weather[0].description; 
    document.getElementById('temp').textContent = jsonObject.current.temp.toFixed(0) + ' °F';
    document.getElementById('humidity').textContent = jsonObject.current.humidity + '%';

    alert(jsonObject.current.alert.description)
  });


//Three Day Forecast
  const fdfURL = "https://api.openweathermap.org/data/2.5/forecast?id=1710915&appid=22a251b90baf680bdd0ab38772b58b4d&units=imperial";

  fetch(fdfURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let day = 0;
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    const forecast = jsObject.list.filter( forecast => forecast.dt_txt.includes("18:00:00"));
    console.log(forecast);
    forecast.forEach( d => {
        let date = new Date(d.dt_txt);
        document.getElementById(`day${day+1}`).textContent = days[date.getDay()];
        document.getElementById(`temp${day+1}`).textContent = `${d.main.temp.toFixed(0)}°F`;
       

        let imagesrc = 'https://openweathermap.org/img/wn/' + d.weather[0].icon + '.png'; 
        let desc = d.weather[0].description;

        document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
        document.getElementById(`icon${day+1}`).setAttribute('alt', desc);

        day++
    })
    
});





  