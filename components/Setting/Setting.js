// TODO: eng/kor
// TODO: google/naver/duckduckgo
class Setting {
  $setting = document.createElement("i");

  constructor({ $target }) {
    this.$setting.classList.add("fa-solid", "fa-gear", "fa-2xl", "손가락");
    this.$setting.addEventListener("click", this.handleClick);

    $target.append(this.$setting);
  }

  handleClick = (ev) => {
    alert("개발 예정입니다.");
  };
}
export default Setting;
