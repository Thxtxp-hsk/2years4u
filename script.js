const images = ['PANDORA-SilverOpenworkheartsilverring-MKP1205123-1.jpg.jpg'];
let index = 0;

const img = document.getElementById('giftImage');

img.addEventListener('click', () => {
  index = (index + 1) % images.length;
  img.src = images[index];
});
