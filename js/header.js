const menus = document.querySelector(".menus");
const nav = document.querySelector(".navigationbar");
const header = document.querySelector("header");
const content = document.querySelector(".content");
const overlay = document.querySelector(".overlay")

menus.addEventListener("click", () =>
{
    header.classList.toggle("sticky");
    overlay.classList.toggle("active");
    nav.classList.toggle("active");
    content.classList.toggle("sticky");
})