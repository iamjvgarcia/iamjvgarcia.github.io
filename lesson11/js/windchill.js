
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

