//test json
const requestURL = 'https://iamjvgarcia.github.io/chamberofcommerce/json/directory.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        
        const companies = jsonObject['companies']
        
        for (let i = 0; i < companies.length; i++){

        let drow = document.getElementsByClassName('row');
        let dcol = document.getElementsByClassName('column');
        let h2 = document.createElement('h2');
        h2.setAttribute('class','compname')
        let compadd = document.createElement('p');
        let cphone = document.createElement('p');
        let cmobile = document.createElement('p');
        let compemail = document.createElement('p');
        let compweb = document.createElement('p');
        let logoimg = document.createElement('img');

        h2.textContent = companies[i].name ;
        compadd.textContent = 'Address: ' + companies[i].address;
        cphone.textContent = 'Phone Number: ' + companies[i].phone;
        cmobile.textContent = 'Mobile Phone: ' + companies[i].mobile;
        compemail.textContent = 'Email: ' + companies[i].email;
        compweb.textContent = 'Website: ' + companies[i].website;
        logoimg.setAttribute('src', companies[i].logo);
        logoimg.setAttribute('alt', companies[i].name);
        
        dcol.appendChild(h2);
        dcol.appendChild(compadd);
        dcol.appendChild(cphone);
        dcol.appendChild(cmobile);
        dcol.appendChild(compemail);
        dcol.appendChild(compweb);

        document.querySelector('div.dcontainer').appendChild(drow);
    }
    });

    //grid 

 // Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}

/* Optional: Add active class to the current button (highlight it) */
var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}






