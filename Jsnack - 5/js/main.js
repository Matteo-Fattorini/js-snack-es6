// jsnack 5
// Partendo da un array semplice tipo:
// var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente


const myArray = ["Michele", "Fabio", "Roberto", "Giovanni", "Simone", "Chiara"];
const maxLength = myArray.length;



let min = prompt(`Inserisci un numero tra 0 e ${maxLength}`);
let max = prompt(`Inserisci un numero tra 0 e ${maxLength}`);


const newArray = myArray.filter((e, i) => i > min && i < max)


console.log(myArray);
console.log(newArray);
