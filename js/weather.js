

const API_KEY = "4b0ca994c0c0c550842db08427f52962"
function onGeoSucess(position) {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather div:first-child")
        const city = document.querySelector("#weather div:last-child")
        city.innerText = data.name
        weather.innerText = `${data.weather[0].main} ${data.main.temp}`
    })
}

function onGeoError() {
    alert("Can't find Your Location")
}

navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoError)

// 4b0ca994c0c0c550842db08427f52962 : APIKEY OPEN WEATHER APP

// https://api.openweathermap.org/data/2.5/weather?lat=36.0145145&lon=129.3257476&appid=4b0ca994c0c0c550842db08427f52962