const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];
    
    
    for (let i = 0; i < 6; i++ ) {
        if (towns[i].name == "Fish Haven") {
            
        
        
        let card = document.createElement('section');
        let info = document.createElement('div');
        let name = document.createElement('h3');
        let test = document.createElement('h3');
        let third = document.createElement('h3');
       
        
      
        
        
    
    
    name.textContent = towns[i].events[0];
    test.textContent = towns[i].events[1];
    nametest.textContent = towns[i].events[2];
    third.textContent = towns[i].events[3];
   
    
   
    
   
    







info.appendChild(name);
info.appendChild(test);
info.appendChild(nametest);
info.appendChild(third);
card.appendChild(info);





document.querySelector('div.events').appendChild(card);}
    }
  });
