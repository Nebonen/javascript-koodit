const num1Str = prompt('Anna ensimmäinen numero:')
const num2Str = prompt('Anna toinen numero:')
const num3Str = prompt('Anna kolmas numero:')

const num1 = parseInt(num1Str);
const num2 = parseInt(num2Str);
const num3 = parseInt(num3Str);

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = (num1 + num2 + num3) / 3

document.querySelector('#sum').innerHTML = sum
document.querySelector('#product').innerHTML = product
document.querySelector('#average').innerHTML = average