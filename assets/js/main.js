const burgerMenu = document.querySelector(".burger-menu");
const headerMobileNav = document.querySelector(".header-mobile__nav");
let burgerMenuBool = true;

burgerMenu.addEventListener("click", () => {
    if(burgerMenuBool){
        headerMobileNav.style.display = "flex";
    }
    else{
        headerMobileNav.style.display = "none";
    }
    burgerMenuBool = !burgerMenuBool;
})