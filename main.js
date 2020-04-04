const bodyElement = document.body;
const Red = document.getElementById('R-value')
const Green = document.getElementById('G-value')
const Blue = document.getElementById('B-value')
const Hex = document.getElementById('Hex')


function convert() {
  let hexCode = "#" + rgbToHex(Red.value) + rgbToHex(Green.value) + rgbToHex(Blue.value)
  // console.log(hexCode)
  Hex.innerHTML = `<h2>${hexCode}</h2>`
  bodyElement.style.background = hexCode;
}

function rgbToHex(value) {
  let result = parseInt(value).toString(16);
  return result.length === 1 ? "0" + result : result;
}