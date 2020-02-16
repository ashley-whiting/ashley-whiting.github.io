
        let tempF = parseFloat(document.getElementById ("temp").innerHTML);
        let speed = parseFloat(document.getElementById("wind").innerHTML);
        

   
        
    if (temp > 50 && wind < 3) {
        document.getElementById("windchill").innerHTML = "N/A";}
        else{    
            
        let f = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));

            document.getElementById('windchill').innerHTML = f.toFixed(1);
       
       
    }

