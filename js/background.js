const images = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.png",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
];

const randomImage = images[Math.floor(Math.random() * images.length)];

const backgroundImage = document.createElement("img");

backgroundImage.src = `img/${randomImage}`;

document.body.appendChild(backgroundImage);
