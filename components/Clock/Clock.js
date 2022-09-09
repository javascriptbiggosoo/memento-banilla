class Clock {
  constructor({ $target }) {
    this.$시계 = document.createElement("div");
    $target.append(this.$시계);

    setInterval(() => {
      const today = new Date();
      this.$시계.innerHTML = `${today.getHours()}:${today.getMinutes()}`;
    }, 1000);
  }
}

export default Clock;
