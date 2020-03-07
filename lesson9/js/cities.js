const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];
    
    
    for (let i = 0; i < 6; i++ ) {
        if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
            
        
        
        let card = document.createElement('section');
        let info = document.createElement('div');
        let pic = document.createElement('div');
        let name = document.createElement('h2');
        let motto = document.createElement('h3');
        let yearFounded = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
        let image = document.createElement('img');
        

    info.classname = "town-info";
    pic.classname = "town-pic";
    name.textContent = towns[i].name;
    motto.textContent = towns[i].motto;
    yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
    population.textContent = "Current Population: " + towns[i].currentPopulation;
    rainfall.textContent = "Average Rainfall: " + towns[i].averageRainfall;
    image.setAttribute('src', "images/" + towns[i].photo);
    image.setAttribute('alt',towns[i].name);







info.appendChild(name);
info.appendChild(motto);
info.appendChild(yearFounded);
info.appendChild(population);
info.appendChild(rainfall);
pic.appendChild(image);
card.appendChild(info);
card.appendChild(pic);

document.querySelector('div.cards').appendChild(card);}
    }
  });
