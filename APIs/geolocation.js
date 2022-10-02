const END_POINT = `http://api.openweathermap.org/geo/1.0/reverse?`;
const API_KEY = "320e9afb47e04d7cecf01d98bc8c1844";

const getLocationName = ({ lat, lon }) =>
  fetch(`${END_POINT}lat=${lat}&lon=${lon}&appid=${API_KEY}`);

if (navigator?.geolocation) {
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const { latitude: lat, longitude: lon } = pos.coords;
      const resLocationName = await getLocationName({ lat, lon });
      const locationNameData = await resLocationName.json();
      console.log(locationNameData);
      return locationNameData;
    },

    (err) => {
      alert("이 브라우저 구린 브라우저!");
      console.error(err);
    }
  );
}
