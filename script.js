//CONSTANTES:
const paletteColors = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');
const clearButton = document.querySelector('#clear-board');
const buttonVQV = document.querySelector('#generate-board');
const inputBoardSize = document.querySelector('#board-size');
const pixelBoard = document.querySelector('#pixel-board');
const buttonChangeColors = document.querySelector('#changeColor')

// REQUISITO 07:
function pickColorPalette(colorsPalette) {
  var chosenColorPalette = colorsPalette.target;
  
  for(let i = 0; i < paletteColors.length; i += 1) {
    paletteColors[i].classList.remove('selected');
    };
    chosenColorPalette.classList.add('selected');
}
  
for(let index = 0; index < paletteColors.length; index += 1) {
paletteColors[index].addEventListener('click', pickColorPalette)
}

// REQUISITO 08:
function changeColor(pixel) {
  var chosenColor = document.querySelector('.selected');
  var pixelSelected = pixel.target;
  
  pixelSelected.style.backgroundColor = window.getComputedStyle(chosenColor).backgroundColor;
}
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', changeColor)
}

// REQUISITO 09:
function clearBoard() {

  for (let i = 0; i < document.querySelectorAll('.pixel').length; i += 1) {
    document.querySelectorAll('.pixel')[i].style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', clearBoard);

// REQUISITO 10 e 11: 
function removeBoard() {
  for (let i = pixelBoard.childNodes.length - 1; i >= 0; i -= 1) {
    pixelBoard.removeChild(pixelBoard.childNodes[i]);
  }
}

function generateVQV(size) {
  if (size) {
    let newSize = size;
    removeBoard();
    
    if (size < 5) {
      newSize = 5;
    }
    else if (size > 50) {
      newSize = 50;
    }
    
    for (let i = 0; i < newSize; i += 1) {
      const newLine = document.createElement('div');
      newLine.className = 'pixelsLine';
      pixelBoard.appendChild(newLine);
      
      for (let i = 0; i < newSize; i += 1) {
        const newPixel = document.createElement('div');
        newPixel.className = 'pixel';
        newPixel.addEventListener('click', changeColor);
        newLine.appendChild(newPixel);
      }
    }
  } else {
    alert('Board inválido!')
  }
}

function resizeBoard() {
  generateVQV(inputBoardSize.value)  
}

buttonVQV.addEventListener('click', resizeBoard);

//REQUISITO 12:
function randomColors() {
  let randomColor1 = Math.floor(Math.random() * 256);
  let randomColor2 = Math.floor(Math.random() * 256);
  let randomColor3 = Math.floor(Math.random() * 256);
  
  return `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
}

function createColorPicker() {

  for (let i = 1; i < paletteColors.length; i += 1) {
    paletteColors[i].style.backgroundColor = randomColors();
  }
}
createColorPicker();

buttonChangeColors.addEventListener('click', createColorPicker);