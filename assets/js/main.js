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
const burgerMenuItem1 = document.querySelectorAll(".burger-menu__item")[0];
const burgerMenuItem2 = document.querySelectorAll(".burger-menu__item")[1];
const burgerMenuItem3 = document.querySelectorAll(".burger-menu__item")[2];
let burgerMenuBool = true;

burgerMenu.addEventListener("click", () => {
    if (burgerMenuBool) {
        headerMobileNav.style.display = "flex";
        burgerMenuItem2.style.display = "none";
        burgerMenuItem1.style.transform = "rotate(45deg) translate(2px, 3px)";
        burgerMenuItem3.style.transform = "rotate(-45deg)";
        burgerMenu.style["justify-content"] = "center";
    }
    else {
        burgerMenu.style["justify-content"] = "space-between";
        headerMobileNav.style.display = "none";
        burgerMenuItem2.style.display = "flex";
        burgerMenuItem1.style.transform = "none";
        burgerMenuItem3.style.transform = "none";
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










// header navigation button
const headerBtn = document.querySelector(".header__btn");
const recognizer = new webkitSpeechRecognition();
recognizer.interimResults = true;
recognizer.lang = 'en-US';
let all = "";
const synth = window.speechSynthesis;


recognizer.onresult = function (event) {
    let result = event.results[event.resultIndex];
    all = result[0].transcript;
    if (result.isFinal) {
        if (result[0].transcript == "bmw" || result[0].transcript == "BMW" || result[0].transcript == "Bmw") {
            window.open("https://simon-svg.github.io/CarsEvolution/assets/htmls/bmw.html")
        }
        else if (result[0].transcript == "Methodist" || result[0].transcript == "Mercedes" || result[0].transcript == "mercedes" ||
        result[0].transcript == "Merced this") {
            window.open("https://simon-svg.github.io/CarsEvolution/assets/htmls/mercedes.html")
        }
        else if (result[0].transcript == "Porsche" || result[0].transcript == "borscht") {
            window.open("https://simon-svg.github.io/CarsEvolution/assets/htmls/porsche.html")
        }
        else if (result[0].transcript == "chevrolet" || result[0].transcript == "Chevrolet" || result[0].transcript == "Chevron.") {
            window.open("https://simon-svg.github.io/CarsEvolution/assets/htmls/chevrolet.html")
        }
        else if (result[0].transcript == "coach" || result[0].transcript == "Doge") {
            window.open("https://simon-svg.github.io/CarsEvolution/assets/htmls/dodge.html")
        }
        else if (result[0].transcript == "smok tank" || result[0].transcript == "smooth tongue" || result[0].transcript == "move tongue" || result[0].transcript == "most tongue" || result[0].transcript == "Mustang") {
            window.open("https://simon-svg.github.io/CarsEvolution/assets/htmls/mustang.html")
        }
        else {
            const utterance1 = new SpeechSynthesisUtterance(`sorry you say ${all}`);
            synth.speak(utterance1);
        }
    }
    else {
        console.log('result ', result[0].transcript);
    }
};
headerBtn.addEventListener("click", () => {
    recognizer.start();
})