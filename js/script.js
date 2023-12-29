//handling movements with animations
let pages = document.querySelector(".pages");
let subMenu = document.querySelector(".sub-menu");

pages.addEventListener("mouseover", function () {
  subMenu.classList.add("submenu-in");
  subMenu.classList.remove("submenu-out");
});
pages.addEventListener("mouseleave", function () {
  subMenu.classList.add("submenu-out");
  subMenu.classList.remove("submenu-in");
});
