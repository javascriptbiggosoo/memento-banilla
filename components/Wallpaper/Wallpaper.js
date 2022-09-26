class Wallpaper {
  $wallpaper = document.createElement("img");
  constructor({ $target }) {
    this.$wallpaper.classList.add("wallpaper");
  }
}

export default Wallpaper;
