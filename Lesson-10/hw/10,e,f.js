function toggle(selector) {
  let btnElement = document.querySelector(selector);

  if (!btnElement.classList.contains("is-toggled")) {
    btnElement.classList.add("is-toggled");
  } else {
    btnElement.classList.remove("is-toggled");
  }
}
