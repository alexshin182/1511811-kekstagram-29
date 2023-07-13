const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const modalElement = document.querySelector('.img-upload');
const scaleInputElement = modalElement.querySelector('.scale__control--value');
const imageElement = modalElement.querySelector('.img-upload__preview');
const smallerButtonElement = modalElement.querySelector ('.scale__control--smaller');
const biggerButtonElement = modalElement.querySelector('.scale__control--bigger');

//переводит в проценты
const scaleImage = (value) => {
  imageElement.style.transform = `scale(${value / 100})`;
  scaleInputElement.value = `${value}%`;
};

//уменьшает масштаб
const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleInputElement.value, 10);
  const newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    scaleImage(MIN_SCALE);
  } else {
    scaleImage(newValue);
  }
};

//увеличивает масштаб
const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleInputElement.value, 10);
  const newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    scaleImage(MAX_SCALE);
  }else{
    scaleImage(newValue);
  }
};

smallerButtonElement.addEventListener('click', onSmallerButtonClick);
biggerButtonElement.addEventListener('click', onBiggerButtonClick);

const resetScale = () => scaleImage(DEFAULT_SCALE);

export{
  resetScale,
  imageElement
};
