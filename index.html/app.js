const apikey = "2cf940581be23da7f2a0a6f5fa362aac"
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
var search = document.querySelector('.search input')
const weatherIcon = document.querySelector('.weather-icon')
let city='karachi'
async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status== 404){
        document.querySelector(".main").style.transition= 'height .6s ease';
             document.querySelector(".main").style.height= '600px';
            document.querySelector(".not-found").style.display = 'block';
            document.querySelector(".weather,.details").style.display = 'none';
            }else {
    var data = await response.json();
    console.log(data)}

    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+ "°C"
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/hr"
    document.querySelector('.desc').innerHTML = data.weather[0].description


    if (data.weather[0].main == 'Clouds') {
        weatherIcon.src = "assets/clouds.png";
    }
    else if (data.weather[0].main == 'Clear') {
        weatherIcon.src = "assets/clear.png";
    }
    else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = "assets/rain.png";
    }
    else if (data.weather[0].main == 'Drizlle') {
        weatherIcon.src = "assets/drizzle.png";
    }
    else if (data.weather[0].main == 'Mist') {
        weatherIcon.src = "assets/mist.png";
    }
    else if (data.weather[0].main == 'Snow') {
        weatherIcon.src = "assets/snow.png";
    }


    document.querySelector(".main").style.height= 'auto';
    document.querySelector(".not-found").style.display = 'none';
    document.querySelector(".weather,.details").style.display = 'block';
}

function weathercity() {
    checkweather(search.value)
}
onload=checkweather("karachi")      