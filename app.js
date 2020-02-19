var weatherUp = document.getElementById('lookup')
var city = document.getElementById('city')
var appID = "4b8f1b0ebce7b7a93fb76bb6e828b9d0";
var cityLocation = "hawkhurst"
console.log("hi")
document.addEventListener('DOMContentLoaded', function() {
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityLocation},uk&APPID=${appID}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         city.innerText = data.name;
    //         weatherUp.innerText = checkWeather(data.weather[0].main);   
    //     })
    var xmr = new XMLHttpRequest();
    xmr.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${cityLocation},uk&APPID=${appID}`, true)
    xmr.send();
    xmr.onload = function() {
        const data = JSON.parse(xmr.responseText);
            console.log(data)
            city.innerText = data.name;
            weatherUp.innerText = checkWeather(data.weather[0].main);  
    }
})

function checkWeather(weather) {
    if(weather === 'Clouds') {
        return (`Lots of ${weather}`)
    }
}