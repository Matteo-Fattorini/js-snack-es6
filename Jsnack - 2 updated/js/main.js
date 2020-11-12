// jsnack 2 - Updated
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let bici = [
  {
    nome: "Mountain-Bike",
    peso: 40,
  },
  {
    nome: "Street-Bike",
    peso: 8,
  },
  {
    nome: "Electric-Bike",
    peso: 10,
  },
];


let [peso, peso2, peso3] = bici.map((item) => item.peso);

let minor = (a, b, c) => {
  let min = Math.min(a, b, c);
  return min;
}

smallBike = bici.filter((item) => item.peso == minor(peso, peso2, peso3))
console.log(smallBike);



console.log(`La bici con peso minore è ${smallBike[0].nome} con un peso di ${smallBike[0].peso}` )