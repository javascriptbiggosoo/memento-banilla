class Weather {
  constructor({ $target }) {
    this.$weather = document.createElement("section");
    $target.append(this.$weather);

    // TODO: API 요청 함수 분리
    const 어쨋든요청 = async function () {
      const API_KEY = "";
      if (navigator?.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude: lat, longitude: lng } = pos.coords;
            console.log(lat, lng);
            fetch(
              `http://apis.data.go.kr/1360000/WthrChartInfoService/getSurfaceChart`
            );
          },
          (err) => {
            throw new Error(err);
          }
        );
      }
    };
    // 어쨋든요청();
  }
}

export default Weather;
