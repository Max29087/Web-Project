let images = ["Banner1.jpg", "Banner2.jpg", "Banner3.jpg"];
let index = 0;

let banner = document.getElementById("banner");
let slider = document.querySelector(".slider");

let interval;

function slide() {
    let nextIndex = (index + 1) % images.length;

    let img = new Image();
    img.src = images[nextIndex];

    banner.style.transform = "translateX(100%)";
    banner.style.opacity = "0";

    setTimeout(() => {
        banner.src = images[nextIndex];

        banner.style.transition = "none";
        banner.style.transform = "translateX(-100%)";

        banner.offsetHeight;

        banner.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
        banner.style.transform = "translateX(0)";
        banner.style.opacity = "1";

        index = nextIndex;
    }, 1000);
}

function startSlider() {
    interval = setInterval(slide, 6000);
}

function stopSlider() {
    clearInterval(interval);
}


slider.addEventListener("mouseenter", stopSlider);
slider.addEventListener("mouseleave", startSlider);

startSlider();