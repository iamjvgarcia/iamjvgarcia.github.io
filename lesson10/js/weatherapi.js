const apiURL1 = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=22a251b90baf680bdd0ab38772b58b4d&units=imperial";
fetch(apiURL1)
  .then((response) => response.json())
  .then((jsonObject) => {
    console.log(jsonObject);
    document.getElementById('currentweathercondition').textContent = jsonObject.weather[0].description; 
    document.getElementById('temp').textContent = jsonObject.main.temp.toFixed(0) + ' °F';
    document.getElementById('humidity').textContent = jsonObject.main.humidity + '%';
    document.getElementById('speed').textContent = jsonObject.wind.speed.toFixed(0) + 'mph';
  });

  const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=22a251b90baf680bdd0ab38772b58b4d&units=imperial";

  fetch(apiURL2)
  .then((response) => response.json())
  .then((jsonObject) => {
    console.log(jsonObject);
    const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const list = jsonObject.list.filter(list => list.dt_txt.includes("18:00:00"));
    console.log(list);

    list.forEach(list => {
      let tr = document.createElement('tr');
      let d = new Date(list.dt_txt);
      let th = document.createElement('th');
      let img = document.createElement('img');
      let td = document.createElement('td');

      th.textContent = dayofWeek[d.getDay()];
      tr.appendChild(th);

      img.setAttribute('src', "https://openweathermap.org/img/wn/" + list.weather[0].icon + ".png");
      tr.appendChild(img);

      td.textContent = list.main.temp.toFixed(0) + ' °F';
      tr.appendChild(td);

      document.querySelector('table.list').appendChild(tr);
  });

});
  