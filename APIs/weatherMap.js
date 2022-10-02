const END_POINT =
  "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=";
const API_KEY = "320e9afb47e04d7cecf01d98bc8c1844";

// 좌표로 날씨 얻기
const getWeatherData = async () => {
  fetch(`${END_POINT}?ServiceKey=${API_KEY}`);
};
