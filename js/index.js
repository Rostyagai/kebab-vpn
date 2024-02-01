// Header menu
const openMenuBtn = document.getElementById("open-menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const menu = document.getElementById("header-menu");

openMenuBtn.addEventListener("click", () => {
  menu.classList.remove("hidden");
});
closeMenuBtn.addEventListener("click", () => {
  menu.classList.add("hidden");
});


