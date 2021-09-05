const API_KEY = "a1344e3f8c90a5c48afc61ed63f0c6c0";

function onGeoOk(position){
    // success 함수는 GeolocationPosition object 하나를 입력받음
    // JS가 GeolocationPosition object를 준다는 의미
    // 요점은 user의 위치를 얻을 것임
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    }); // JS calling url
}

function onGeoErr(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
// getCurrentPosition()은 두개의 argument가 필요함.
// 하나는 제대로 실행이 되었을 때 실행될 함수고, 다른 하나는 에러가 발생했을 경우 실행되는 함수이다.
// getCurrentPosition()에 success와 error 함수를 주고, JS가 함수를 부르고 object를 전달해준다.
// onGeoOk(position)처럼 JS가 채울 공간만 만들어주면 된다.