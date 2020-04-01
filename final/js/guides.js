const requestURL = 'https://ashley-whiting.github.io/final/data/guides.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const guides = jsonObject['guides'];
    
    for (let i = 0; i < guides.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let certification = document.createElement('p');
        let years = document.createElement('p');
        let email = document.createElement('p');
        let bio = document.createElement('p');
       
        let image = document.createElement('img');

h2.textContent = guides[i].name;
certification.textContent = "Certificatio Level:" + guides[i].certification;
years.textContent = "Years of Experience:" + guides[i].years;
email.textContent = "Email:" + guides[i].email;
bio.textContent = "About:" + guides[i].bio;

image.setAttribute('src', "data/" + guides[i].photo);
image.setAttribute('alt',guides[i].name  + (i+1));

card.appendChild(h2);
card.appendChild(image);
card.appendChild(certification);
card.appendChild(years);
card.appendChild(email);
card.appendChild(bio);




document.querySelector('div.cards').appendChild(card);}
  });