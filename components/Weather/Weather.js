import { getWeatherData } from "../../APIs/weatherMap.js";

class Weather {
  weatherData;
  isLoading = true;

  $weather = document.createElement("section");
  constructor({ $target }) {
    this.$weather.classList.add("weather");
    $target.append(this.$weather);

    this.render();
  }
  render = () => {
    if (this.isLoading) {
      this.$weather.innerHTML = "로딩중이라능~~";
    }

    // TODO: 이거 좀 함수로 분리해야 할 것 같은데
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude: lat, longitude: lon } = pos.coords;

          const weatherData = await getWeatherData([lat, lon]);
          console.log(weatherData);
          this.isLoading = false;

          const 날씨상황 = weatherData.weather[0].main;
          const 기온 = weatherData.main.temp - 273.15;
          this.$weather.innerHTML = `
          <div>
          <div>${날씨상황}</div>
          <div>${Math.round(기온)}°C</div>
          </div>
          `;

          const img = document.createElement("img");
          img.classList.add("날씨그림");
          img.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
          this.$weather.append(img);
        },
        (err) => {
          alert("님 브라우저 완전 구림. 크롬 쓰라는;");
          console.error(err);
        }
      );
    }
  };
}

export default Weather;
