// jsnack 6
// dato questo array di obj iniziale:
// var arrayObj = [
//   {name: 'Poppy', type: 'tshirt', color: 'red'},
//   {name: 'Jumping', type: 'occhiali', color: 'blue'},
//   {name: 'CrissCross', type: 'scarpe', color: 'black'},
//   {name: 'Jenny', type: 'borsa', color: 'pink'},
// ];
// Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
// una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale

const arrayObj = [
  { name: "Poppy", type: "tshirt", color: "red" },
  { name: "Jumping", type: "occhiali", color: "blue" },
  { name: "CrissCross", type: "scarpe", color: "black" },
  { name: "Jenny", type: "borsa", color: "pink" },
];


const randomLetters = "abcdefghilmnopqrstuvz";



const newArr = arrayObj.map((a) => ({ ...a }));
newArr.forEach(e => e.position = randomLetters[Math.floor(Math.random()*randomLetters.length)]);

console.log(arrayObj);
console.log(newArr);





