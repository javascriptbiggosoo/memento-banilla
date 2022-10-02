const END_POINT = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = "320e9afb47e04d7cecf01d98bc8c1844";

// 좌표로 날씨 얻기
export const getWeatherData = async ([lat = 33.44, lon = -94.04]) => {
  const res = await fetch(`${END_POINT}lat=${lat}&lon=${lon}&appid=${API_KEY}`);
  const data = await res.json();

  return data;
};
