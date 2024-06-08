const sprite = document.getElementById("sprite");

const costumes = [
    "Միացիր մեզ Հունիսի 22-ին <br>ժամը 11:00-21:00 ",
    "Հասցե՝ Արարատի մարզ, <br> Դվին բնակավայր ",
];
let currentCostume = 1;

function changeCostume() {
    sprite.innerHTML = `${costumes[currentCostume]}`;
    currentCostume = (currentCostume + 1) % costumes.length;
}

setInterval(changeCostume, 2000);


const sprite2 = document.getElementById("sprite2");

const costumes2 = [
    "Join Us At June 22! <br> 11:00am-09:00pm ",
    "Location: Dvin Village, <br> Artashat community ",
];
let currentCostume2 = 1;

function changeCostume2() {
    sprite2.innerHTML = `${costumes2[currentCostume2]}`;
    currentCostume2 = (currentCostume2 + 1) % costumes2.length;
}

setInterval(changeCostume2, 2000);

const cont_all = document.querySelector(".cont_all");
const text = document.querySelector(".paragr_text");
const nav_logo_left = document.querySelector(".nav_logo_left");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider_img");
const sliderContener = document.querySelector(".slider-contener");
const sliderNext = document.querySelector(".slider-next");
const sliderPrev = document.querySelector(".slider-prev");
const sliderN = document.querySelector(".sliderN");
const down = document.querySelector(".block_down");
const up = document.querySelector(".block_up");
const closeBtn = document.querySelector(".close");
const contenerImg = document.querySelector(".cont_all");

let i = 0;
let width;
if (slider.offsetWidth > 780) {
    width = slider.offsetWidth / 4;
} else {
    width = slider.offsetWidth;
}

function changeSlide() {
    sliderContener.style.width = `${width * images.length}px`;
    images.forEach((el) => {
        el.style.width = `${width}px`;
        el.style.height = "auto";
    });
    changWidth();
}

changeSlide();
window.addEventListener("resize", changeSlide);

sliderNext.addEventListener("click", function () {
    i++;
    
    if (i >= images.length) {
        i = 0;
    }
    changWidth();

    if (i > 0) {
        sliderPrev.style.display = `flex`;
    }

    if (i == 0) {
        sliderPrev.style.display = `none`;
    }
});

sliderPrev.addEventListener("click", function () {
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    changWidth();
});

function changWidth() {
    sliderContener.style.transform = `translate(-${i * width}px)`;
    // sliderN.innerHTML =`<p class = "slideNamber">սլայդ N.${1+i} </P>`
}

if (i == 0) {
    sliderPrev.style.display = `none`;
}

let bool = true;

slider.addEventListener("dblclick", imgWidth);

function imgWidth(e) {
    if (e.target.tagName == "IMG") {
        down.style.display = `none`;
        up.style.display = `none`;
        closeBtn.style.display = "flex";
        document.body.style.backgroundColor = "black";
    }
}

closeBtn.addEventListener("click", function () {
    down.style.display = `block`;
    up.style.display = `block`;
    closeBtn.style.display = "none";
    document.body.style.backgroundColor = "";
});





function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("main").style.marginRight = "-270px";
    document.getElementById("log").style.width = "0%";
    document.getElementById("body").style.overflowY = "hidden";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("mySidenav").style.height = "0";
    document.getElementById("main").style.marginRight = "0";
    document.getElementById("log").style.width = "100%";
    document.getElementById("body").style.overflowY = "scroll";

}

function openLeng() {
    document.getElementById("opts").style.display = "flex";
    document.getElementById("opts2").style.display = "flex";
    // document.getElementById("main").style.marginTop = "100px";
}

function closeLeng() {
    document.getElementById("opts").style.display = "none";
    document.getElementById("opts2").style.display = "flex";

    // document.getElementById("main").style.marginTop = "0";
}



