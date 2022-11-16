
const images = [
    "background0.jpg",
    "background1.jpg",
]


const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
const wholeCotainer = document.querySelector(".whole-container")

bgImage.src = `img/${chosenImage}`;
document.body.style.backgroundImage = "url(img/background2.jpg)";
document.body.style.backgroundImage = `url(${bgImage.src})`;
console.log(bgImage)