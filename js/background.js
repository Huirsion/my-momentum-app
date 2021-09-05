const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = `url("img/${chosenImage}")`;
//console.log(bgImage);
document.body.style.backgroundImage = bgImage;

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage); // appendChild()는 body에 html을 추가한다

