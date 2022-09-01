class Clock {
  constructor({ $target }) {
    this.$시계 = document.createElement("div");
    $target.append(this.$시계);

    setInterval(() => {
      this.$시계.innerHTML = new Date();
    }, 1000);
  }
}

export default Clock;
