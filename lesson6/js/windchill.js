<script>
    function doInputOutput(){
        let temp = document.getElementById("temp").value;
        let windspeed = document.getElementById("speed").value;
        let wc = windChill(temp, windspeed);
        document.getElementById("outputDiv").innerHTML = "The Wind Chill is" + wc;
    }
    function windChill(tempF, speed){
        
        let f = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
        return f;
        
    }
    </script>