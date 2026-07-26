const button=
document.getElementById("menu")
const menu=
document.getElementById("header-nav")

button.addEventListener("click",function()
{
    menu.classList.toggle("open");
});