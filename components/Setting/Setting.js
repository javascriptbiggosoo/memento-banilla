// TODO: eng/kor
// TODO: google/naver/duckduckgo
class Setting {
  $setting = document.createElement("i");
  constructor({ $target }) {
    this.$setting.classList.add("fa-solid", "fa-gear", "fa-2xl");

    $target.append(this.$setting);
  }
}
export default Setting;
