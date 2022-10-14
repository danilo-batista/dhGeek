const hamburguerMenu = document.querySelector(".hamburguer-menu")
const menu = document.getElementById("sidebar-menu")
const closeMenu = document.querySelector(".close-menu")

hamburguerMenu.addEventListener("click", ()=>{
    menu.style.display = "flex";
    hamburguerMenu.style.display = "none";
    closeMenu.style.display = "inline";

})

closeMenu.addEventListener("click", ()=>{
    menu.style.display = "none";
    hamburguerMenu.style.display = "inline";
    closeMenu.style.display = "none";
})
