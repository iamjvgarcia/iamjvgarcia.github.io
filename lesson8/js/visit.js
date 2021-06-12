if (typeof Storage !== "undefined") {
    if (localStorage.visitcount) {
      document.getElementById("visit").innerHTML =
        "Welcome back, you've been here " +
        localStorage.visitcount +
        " times before.";
      localStorage.visitcount = Number(localStorage.visitcount) + 1;
    } else {
      localStorage.visitcount = 1;
      document.getElementById("visit").innerHTML =
        " Welcome. This is your first time here!";
    }

} 
  
  console.log("localstorage visit count now: " + localStorage.visitcount);
  
/**window.localStorage.date = `${infoDate.getDate()} ${monthName} ${year}`;
let fecha1 = localStorage.date;
let fecha2 = new Date();



let oneDay = 1000 * 60 * 60 * 24;
let date1 = new Date(fecha1);
let date2 = new Date(fecha2);
let subtraction = date1.getTime() - date2.getTime();
let result = Math.round(subtraction / oneDay);
document.getElementById('.visit2').textContent = `Number of days between your last visit and today: ${result} days.`;
**/
