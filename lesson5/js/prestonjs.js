function toggleMenu() {
    document.getElementsByClassName("links")[0].classList.toggle("responsive");
}

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

const banner = document.querySelector('.banner');
const dayOfWeek = new Date().getDay();
if (dayOfWeek === 5) {
    banner.classList.add('visible');
}
