class Weather {
  constructor({ $target }) {
    this.$weather = document.createElement("section");
    $target.append(this.$weather);
  }
}

export default Weather;
