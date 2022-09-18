class Weather {
  constructor({ $target }) {
    this.$weather = document.createElement("div");
    $target.append(this.$weather);
  }
}

export default Weather;
