//Weather Condition
const wboxURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=22a251b90baf680bdd0ab38772b58b4d&units=imperial";
fetch(wboxURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    console.log(jsonObject);
    document.getElementById('currentweathercondition').textContent = jsonObject.weather[0].description; 
    document.getElementById('temp').textContent = jsonObject.main.temp.toFixed(0) + ' °F';
    document.getElementById('humidity').textContent = jsonObject.main.humidity + '%';
    document.getElementById('speed').textContent = jsonObject.wind.speed.toFixed(0) + 'mph';
  });

  //Wind Chill
let Temp = document.getElementById('temp').textContent;
let speedW = document.getElementById('speed').textContent;

if(Temp <= 50 && speedW >= 3){
  let p = Math.pow(speedW, 0.16);
  let f = 35.74 + 0.6215 * Temp - 35.75 * p + 0.4275 * Temp * p;
  let result = f.toFixed(0);
  document.getElementById('wind').innerHTML = result + "&deg;F";
}
else{
   document.getElementById('wind').textContent = "N/A";
}

//Five Day Forecast
  const fdfURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=22a251b90baf680bdd0ab38772b58b4d&units=imperial";

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

//Events 
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];
    const town = towns[2];
    const events = town.events;
    console.log(events);

    let container = document.createElement("div");
    container.setAttribute("class", "container");
    let card1 = document.createElement("section");
    card1.setAttribute("class", "text");
    let h2 = document.createElement("h2");
    h2.textContent = "Upcoming Events:";
    card1.appendChild(h2);


    for (let i = 0; i < events.length; i++) {

      let p1 = document.createElement("p");

      document.querySelector("div.events").appendChild(container);

      p1.textContent = town.events[i];
      card1.appendChild(p1);  

      document.querySelector("div.events").appendChild(card1);

      container.appendChild(card1);
    }
  });



