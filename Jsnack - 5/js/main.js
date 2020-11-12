// jsnack 5
// Partendo da un array semplice tipo:
// var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente


const myArray = ["Michele", "Fabio", "Roberto", "Giovanni", "Simone", "Chiara"];
const maxLength = myArray.length;



let firstNum = prompt(`Inserisci un numero tra 0 e ${maxLength}`);
let secondNum = prompt(`Inserisci un numero tra 0 e ${maxLength}`);


const newArray = myArray.filter((e, i) => i > firstNum && i < secondNum)


console.log(myArray);
console.log(newArray);
