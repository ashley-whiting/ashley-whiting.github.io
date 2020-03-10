const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=117b7f64ed1dc97009b2e9dcf0623b82';
fetch(apiURL)
  .then((response) => response.json())
  .then((apiObject) => {
    console.log(apiObject);
    document.getElementById('current-temp').textContent = apiObject.main.temp;

 
  const imagesrc = 'https://openweathermap.org/img/w/' + apiObject.weather[0].icon + '.png';  // note the concatenation
  const desc = apiObject.weather[0].description;  // note how we reference the weather array
  
  document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
  document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
  document.getElementById('icon').setAttribute('alt', desc);
});
