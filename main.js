// import html
const showCover = document.querySelector(".select-title-cont");
const showTitleHex = document.querySelector(".select-title");
const FlipperBtn = document.querySelector(".color-flipper-btn");
const HexBtn = document.querySelector(".simple-hex-btn");
const RGBBtn = document.querySelector(".color-flipper-btn");
const title = document.getElementById("color-name");
const changerBtn = document.querySelector(".color-changer-btn");
const background = document.querySelector(".down-side");

// Hex Colors
const colorsHex = [
     "#000080",
     "#00008B",
     "#0000CD",
     "#0000FF",
     "#006400",
     "#008000",
     "#008080",
     "#008B8B",
     "#00BFFF",
     "#00CED1",
     "#00FA9A",
     "#00FF00",
     "#00FF7F",
     "#00FFFF",
     "#00FFFF",
     "#191970",
     "#1E90FF",
     "#20B2AA",
     "#228B22",
     "#2E8B57",
];

// Random Colors RGB
function randomRGB() {
     return `rgb(${getRandomNumber(255)}, ${getRandomNumber(255)}, ${getRandomNumber(255)})`;
}

// Random Number
function getRandomNumber(max) {
     return Math.floor(Math.random() * max);
}

//Default RGB Color Section
function RGBColor() {
     changerBtn.addEventListener("click", () => {
          background.style.backgroundColor = `${randomRGB()}`;
          title.textContent = `${randomRGB()}`;
     });
}

// This will when you select Hex
HexBtn.addEventListener("click", () => {
     showCover.style.display = "block";
     showTitleHex.textContent = "Hex Color";
     setTimeout(() => {
          showCover.style.display = "none";
     }, 500);
});

// This will when you select Hex
RGBBtn.addEventListener("click", () => {
     showCover.style.display = "block";
     showTitleHex.textContent = "RGB Color";
     setTimeout(() => {
          showCover.style.display = "none";
     }, 500);
});

// HexColor Section
function hexColor() {
     changerBtn.addEventListener("click", () => {
          const randomIndex = getRandomNumber(colorsHex.length);
          background.style.backgroundColor = `${colorsHex[randomIndex]}`;
          title.textContent = `${colorsHex[randomIndex]}`;
     });
}
function showSelected() {
     body.style.position = "absolute";
     body.style.width = "100%";
     body.style.height = "100%";
     body.zIndex = "3";
}

// Select Hex Color
HexBtn.addEventListener("click", () => {
     hexColor();
});

// Select RGB Color
FlipperBtn.addEventListener("click", RGBColor);
RGBColor();
