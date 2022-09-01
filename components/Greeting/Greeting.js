class Greeting {
  constructor({ $target }) {
    this.$greeting = document.createElement("div");
    this.$greeting.innerText = `안녕하세요 **님`;

    $target.append(this.$greeting);
  }
}

export default Greeting;
