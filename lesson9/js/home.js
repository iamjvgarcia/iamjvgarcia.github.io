const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(townData){
        const towns = townData['towns'];
        const forpage = towns.filter(specific => specific.name == "Soda Springs" || specific.name == "Fish Haven" || specific.name == "Preston");
        
        forpage.forEach(towns => {

            let townCards = document.createElement('section');
            let h2 = document.createElement('h2');
            let h4 = document.createElement('h4');
            let year = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let townImage = document.createElement('img');

            h2.textContent = `${towns.name}`;
            townCards.appendChild(h2);

            h4.textContent = `${towns.motto}`;
            townCards.appendChild(h4);

            year.textContent = `Year Founded: ${towns.yearFounded}`;
            townCards.appendChild(year);

            population.textContent = `Current Population: ${towns.currentPopulation}`;
            townCards.appendChild(population);

            rainfall.textContent = `Average Rainfall: ${towns.averageRainfall}`;
            townCards.appendChild(rainfall);

            townImage.setAttribute('src', towns.photo);
            townImage.setAttribute('alt', `${towns.name}`);
            townCards.appendChild(townImage);

            document.getElementById('townCards').appendChild(townCards);
          
        });
    })