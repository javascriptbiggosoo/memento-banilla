class Clock {
  constructor({ $target }) {
    this.$시계 = document.createElement("div");
    this.$시계.classList.add("현재시간");
    $target.append(this.$시계);

    setInterval(() => {
      const today = new Date();
      this.$시계.innerHTML = `${this.영추가(today.getHours())}:${this.영추가(
        today.getMinutes()
      )}`;
    }, 1000);
  }

  영추가 = (num) => {
    if (num < 10) {
      return "0" + num;
    }
    return num;
  };
}

export default Clock;
