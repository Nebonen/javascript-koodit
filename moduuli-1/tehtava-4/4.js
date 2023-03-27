const nimi = prompt('Give name:');
let numero = Math.floor(Math.random() * 4) + 1;

if (numero == 1) {
    document.querySelector('#target').innerHTML = nimi + ' you are Gryffindor!';
} else if (numero == 2) {
    document.querySelector('#target').innerHTML = nimi + ' you are Slytherin!';
} else if (numero == 3) {
    document.querySelector('#target').innerHTML = nimi + ' you are Hufflepuff!';
} else if (numero == 4) {
    document.querySelector('#target').innerHTML = nimi + ' you are Ravenclaw!';
}

