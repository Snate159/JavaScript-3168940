const luffyImg = document.getElementById('Luffy');
const btnBW = document.getElementById('btn1');
const btnBlur = document.getElementById('btn2');
const btnZoomRotate = document.getElementById('btn3');

function resetEffects() {
  luffyImg.classList.remove('grayscale', 'blur', 'zoom-rotate');
}

btnBW.addEventListener('click', () => {
  resetEffects();
  luffyImg.classList.add('grayscale');
});

btnBlur.addEventListener('click', () => {
  resetEffects();
  luffyImg.classList.add('blur');
});

btnZoomRotate.addEventListener('click', () => {
  resetEffects();
  luffyImg.classList.add('zoom-rotate');
});