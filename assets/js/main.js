// preloader
const preloader = document.querySelector(".preloader");
const body = document.querySelector("body")
document.body.onload = () => {
    preloader.style.opacity = "0";
    setTimeout(() => {
        if (document.title !== "Cars Evolution") {
            body.style["overflow-y"] = "scroll";
        }
        preloader.style.display = "none";
        preloader.remove()
    }, 500)
}






// header mobile
const burgerMenu = document.querySelector(".burger-menu");
const headerMobileNav = document.querySelector(".header-mobile__nav");
let burgerMenuBool = true;

burgerMenu.addEventListener("click", () => {
    if (burgerMenuBool) {
        headerMobileNav.style.display = "flex";
    }
    else {
        headerMobileNav.style.display = "none";
    }
    burgerMenuBool = !burgerMenuBool;
})





const app = document.querySelector(".app");
const mobileDevice = document.querySelector(".mobile-device");
if (window.innerWidth < 900) {
    app.style.display = "none";
    mobileDevice.style.display = "block";
}
else {
    app.style.display = "block";
    mobileDevice.style.display = "none";
}
window.addEventListener("resize", (e) => {
    if (window.innerWidth < 900) {
        app.style.display = "none";
        mobileDevice.style.display = "block";
    }
    else {
        app.style.display = "block";
        mobileDevice.style.display = "none";
    }
})