const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];
    
    
    for (let i = 0; i < 6; i++ ) {
        if (i ==0 || i ==3 || i ==6 || i ==2) {
            continue
        }
        
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let motto = document.createElement('h3');
        let yearFounded = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
        let image = document.createElement('img');
        

h2.textContent = towns[i].name;
motto.textContent = towns[i].motto;
yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
population.textContent = "Current Population: " + towns[i].currentPopulation;
rainfall.textContent = "Average Rainfall: " + towns[i].averageRainfall;
image.setAttribute('src', "images/fishhaven.jpg");
image.setAttribute('alt',towns[i].name);







card.appendChild(h2);
card.appendChild(motto);
card.appendChild(yearFounded);
card.appendChild(population);
card.appendChild(rainfall);
card.appendChild(image);

document.querySelector('div.cards').appendChild(card);}
  });
