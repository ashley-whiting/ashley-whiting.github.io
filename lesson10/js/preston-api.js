const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=117b7f64ed1dc97009b2e9dcf0623b82';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('high').textContent = jsObject.main.temp;
    document.getElementById('speed').textContent = jsObject.wind.speed;
    let tempF = parseFloat(document.getElementById ("high").innerHTML);


        let speed = parseFloat(document.getElementById("speed").innerHTML);
        

   
        
    if (tempF > 50 && speed < 3) {
        document.getElementById("windchill").innerHTML = "N/A";}
        else{    
            
        let f = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));

            document.getElementById('windchill').innerHTML = f.toFixed(1);
       
       
    }


});