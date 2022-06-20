function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
  const elWeather = document.querySelector("#weather");
  fetch(url)
    .then((response) => response.json()) // 첫번째로 응답을 받아 json 형태로 반환한다.
    .then((data) => {
      // json을 data로 받는다.
      const icon = data.weather[0].icon;
      const elem = document.createElement("img");
      elem.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${icon}@2x.png`
      );
      elem.setAttribute("title", `${data.weather[0].main}`
      );
      elem.setAttribute('alt', 'weather icon')
      const elem2 = document.createElement("span");
      elem2.classList.add("text");
      elem2.innerText = data.name;
      const elem3 = document.createElement("span");
      elem3.classList.add("text");
      elem3.innerText = `${data.main.temp} °C`;
      const elemWrap = document.createElement("div");
      elemWrap.setAttribute("id", "wheather-info");
      elemWrap.append(elem2, elem3);
      elWeather.append(elem);
      elWeather.prepend(elemWrap);
    });
}

function onGeoError() {
  alert("can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
