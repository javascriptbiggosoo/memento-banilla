class Setting {
  $setting = document.createElement("i");
  constructor({ $target }) {
    this.$setting.classList.add("fa-solid", "fa-gear");

    $target.append(this.$setting);
  }
}
export default Setting;
