
    function doInputOutput(){
        let temp = 73;
        let windspeed = 5;
        let wc = windChill(temp, windspeed);

        let digits = 0;
    let multiplier = Math.pow(10, digits);
    wc = Math.round(wc * multiplier) / multiplier;
        
        document.getElementById("outputDiv").innerHTML = "The Wind Chill is" +  wc;
    }
    function windChill(tempF, speed){
        
        let f = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
        return f;
       
    }
