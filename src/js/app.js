import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  document.querySelectorAll(".price.hot").forEach(hotPrice => hotPrice.innerText += "🔥");
});
