class Setting {
  constructor({ $target }) {
    this.$setting = document.createElement("i");
    $target.append(this.$setting);
  }
}
export default Setting;
