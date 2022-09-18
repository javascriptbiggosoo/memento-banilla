class Clock {
  constructor({ $target }) {
    this.$시계 = document.createElement("div");
    this.$시계.classList.add("현재시간");
    $target.append(this.$시계);

    setInterval(() => {
      const today = new Date();
      this.$시계.innerHTML = `${today.getHours()}:${today.getMinutes()}`;
    }, 1000);
  }
}

export default Clock;
