const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navmenu");
const banner = document.querySelector(".banner");
const body = document.querySelector("#body");







const mobileMenu = () => {
    if (hamburger.classList.contains("active")) {
        banner.classList.remove('blurry');
        body.classList.remove('noscroll');
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    } else {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        body.classList.toggle('noscroll');
        banner.classList.toggle('blurry');
    }

}

hamburger.addEventListener("click", mobileMenu);