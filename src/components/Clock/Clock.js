class Clock {
  $시계 = document.createElement("div");

  constructor({ $target }) {
    this.$시계.classList.add("현재시간");
    $target.append(this.$시계);

    this.showTimenow();
  }

  영추가 = (num) => {
    if (num < 10) {
      return "0" + num;
    }
    return num;
  };

  showTimenow = () => {
    setInterval(() => {
      const today = new Date();
      this.$시계.innerHTML = `${this.영추가(today.getHours())}:${this.영추가(
        today.getMinutes()
      )}`;
    }, 1000);
  };
}

export default Clock;
