//row1  
const requestURL = "https://iamjvgarcia.github.io/chamberofcommerce/json/directory.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (compData) {
        const companies = compData['companies'];
        const forpage = companies

        forpage.forEach(companies => {

            let compCards = document.createElement('section');
            compCards.setAttribute('class', 'companies')
            let h2 = document.createElement('h2');
            let compadd = document.createElement('p');
            compadd.setAttribute("class", "compadd")
            let cphone = document.createElement('p');
            let cmobile = document.createElement('p');
            let compemail = document.createElement('p');
            let compweb = document.createElement('p');
            let imgContainter = document.createElement('div');
            imgContainter.setAttribute("class", "imgContainer")
            let townImage = document.createElement('img');


            compCards.appendChild(imgContainter)

            townImage.setAttribute('src', companies.logo);
            townImage.setAttribute('alt', `${companies.name}`);
            imgContainter.appendChild(townImage);

            h2.textContent = `${companies.name}`;
            compCards.appendChild(h2);

            compadd.textContent = `Address: ${companies.address}`;
            compCards.appendChild(compadd);

            cphone.textContent = `Phone: ${companies.phone}`;
            compCards.appendChild(cphone);

            cmobile.textContent = `Mobile: ${companies.mobile}`;
            compCards.appendChild(cmobile);

            compemail.textContent = `Email: ${companies.email}`;
            compCards.appendChild(compemail);

            compweb.textContent = `Average Rainfall: ${companies.website}`;
            compCards.appendChild(compweb);

            document.getElementById('dcontainer').appendChild(compCards);

        });
    })

//grid/list view

window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("sGrid").addEventListener("click", function () {
        document.getElementById("dcontainer").classList.remove("grid");
    });
    document.getElementById("sList").addEventListener("click", function () {
        document.getElementById("dcontainer").classList.add("grid");
    });
});

var container = document.getElementById("btncontainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("dactive");
        current[0].className = current[0].className.replace("dactive", "");
        this.className += " dactive";
    });
}











