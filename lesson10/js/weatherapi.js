const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=117b7f64ed1dc97009b2e9dcf0623b82';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });
