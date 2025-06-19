const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");
const menu = document.getElementById("menu");

openMenuBtn.addEventListener("click", () => menu.classList.add("show"));
closeMenuBtn.addEventListener("click", () =>
  menu.classList.remove("show")
);
function closeMenu() {
  menu.classList.remove("show");
}