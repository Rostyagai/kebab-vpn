// Header menu
const openMenuBtn = document.getElementById("open-menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const menu = document.getElementById("header-menu");
// const menuLink = document.querySelectorAll(".menu-link");

openMenuBtn.addEventListener("click", () => {
  menu.classList.remove("hidden");
});
closeMenuBtn.addEventListener("click", () => {
  menu.classList.add("hidden");
});

// menuLink.forEach((item) => {
//   item.addEventListener("click", () => {
//     menu.classList.add("hidden");
//   });
// });
