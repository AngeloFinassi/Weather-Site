async function weatherInfo(){
    var city = document.getElementById("input_city").value

    if (city.length == 0) {
        alert("Please insert a Correct City Name.");
        return;
    }
    else{
        //Builds the HTTP link structure to access information in the API 
        const apiKey = "badf8607a6ea424ae7011e80d6945a1a"
        var apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"
        
        apiUrl = apiUrl + `&appid=${apiKey}` + `&q=${city}`
        
        const response = await fetch(apiUrl)
        var data = await response.json();

        //Sky situation
        var sky = data.weather[0].main
        var img = document.getElementById("weather-icon")

        //Change the image on the top for each situation
        switch(sky){
            case "Clouds":
                img.src = "imagens/clouds.png"
                break
            case "Clear":
                img.src = "imagens/clear.png"
                break
            case "Rain":
                img.src = "imagens/rain.png"
                break
            case "Drizzle":
                img.src = "imagens/drizzle.png"
                break
            default:
                break
        }

        //Add a information in the HTML, with the API structure
        document.getElementById("name_city").innerHTML = data.name
        document.getElementById("temperature_tittle").innerHTML = data.main.temp + " ºC"
        document.getElementById("humidity_percent").innerHTML = data.main.humidity + "%"
        document.getElementById("wind_speed").innerHTML = data.wind.speed + " Km/h"
    }
}