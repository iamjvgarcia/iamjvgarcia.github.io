//Toggle Menu
function toggleMenu() {
    document.getElementsByClassName("links")[0].classList.toggle("responsive");
}

//Date
let date = new Date();
let year = date.getFullYear();
let day = date.getDay();
let month = date.getMonth()+1;
let daynumber = date.getDate();
document.querySelector("#currentyear").textContent = year;
let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
let nameday = daylist[day];
let monthlist = ["January", "February", "March", "April" ,"May", "June", "July", "August", "September", "October", "November", "December"]
let monthname = monthlist[month];
document.querySelector("#currdate").textContent =  `${nameday}, ${daynumber} ${monthname} ${year}`;

//pancakes
const pancakes = document.querySelector(".pancakes");
const dayOfWeek = date.getDay();
if (dayOfWeek == 5) {
  pancakes.style.display = "block";
} else {
  pancakes.style.display = "none";
}

//page views
function counter_fn() {
  var counter = document.getElementById("visit");
  var count = 0;
  count = parseInt(counter.innerHTML);
  count = count + 1;
  counter.innerHTML = count;
}
window.onload = counter_fn;