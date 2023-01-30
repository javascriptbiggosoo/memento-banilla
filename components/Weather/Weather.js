import { getWeatherData } from "../../APIs/weatherMap.js";

class Weather {
  weatherData;
  isLoading = true;

  $weather = document.createElement("section");

  constructor({ $target }) {
    this.$target = $target;
    this.$weather.classList.add("weather");

    this.$target.append(this.$weather);

    setInterval(this.render(), 1000 * 60 * 1);
  }

  toggleIsLoading = () => {
    this.isLoading = !this.isLoading;
  };

  showWeather = async (pos) => {
    const { latitude: lat, longitude: lon } = pos.coords;

    const weatherData = await getWeatherData([lat, lon]);
    // console.log(weatherData);
    this.toggleIsLoading();

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
  };
  render = () => {
    if (this.isLoading) this.$weather.innerHTML = "~ Loading ~";

    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showWeather, (err) => {
        alert(
          "위치 추적을 허용하지 않았거나 크롬 브라우저가 아닌 경우 일부 기능이 작동하지 않을 수 있습니다."
        );
        console.error(err);
      });
    }
  };
}

export default Weather;
