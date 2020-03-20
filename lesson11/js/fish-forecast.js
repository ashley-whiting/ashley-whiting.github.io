
    let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = new Date();
    const today = day.getDay();
    let i;
    
    for (i=1; i<6; i++){
        if ((today + i) <7){
            document.getElementById('day' + i).innherHTML = dayName[today + i];
            }
            else{
                document.getElementById('day' + i).innerHTML = dayName[(today + i) - 7];
            }
    }



const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?zip=83287,us&units=imperial&appid=117b7f64ed1dc97009b2e9dcf0623b82';

fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

 
    
    const fivedayforecast = jsObject.list.filter(x => 
    x.dt_txt.includes('18:00:00'));
    console.log(fivedayforecast);

    for (let i=0; i<fivedayforecast.length; i++){
        document.getElementById('forecast' + [i+1]).
        textContent = fivedayforecast[i].main.temp;
    }


    let imgsrc;
    let des;

    for (let i = 0; i<fivedayforecast.length; i++){
        imgsrc = 'https://openweathermap.org/img/w/' + fivedayforecast[i].weather[0].icon +'.png';
        desc = fivedayforecast[i].weather[0].description; 
    
    document.getElementById('icon' + [i+1]).textContent = imgsrc;  // informational specification only
    document.getElementById('icon' + [i+ 1]).setAttribute('src', imgsrc);  // focus on the setAttribute() method
    document.getElementById('icon' + [i + 1]).setAttribute('alt', des);
  }


});
