//source of prophet information in json
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        
        const prophets = jsonObject['prophets']
        
        for (let i = 0; i < prophets.length; i++){

        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let bdate = document.createElement('p');
        let bplace = document.createElement('p');
        let eximage = document.createElement('img');

        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        bdate.textContent = 'Date of Birth: ' + prophets[i].birthdate;
        bplace.textContent = 'Place of Birth: ' + prophets[i].birthplace;
        eximage.setAttribute('src', prophets[i].imageurl);
        eximage.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);
        
        card.appendChild(h2);
        card.appendChild(bdate);
        card.appendChild(bplace);
        card.appendChild(eximage);

        document.querySelector('div.cards').appendChild(card);
    }
    });







