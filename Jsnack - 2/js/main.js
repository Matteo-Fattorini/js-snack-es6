let bici = [
  {
    nome: "Mountain-Bike",
    peso: 3,
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

bici.sort((a, b) => a.peso - b.peso);







console.log(`La bici più leggera è ${bici[0].nome} con un peso di ${bici[0].peso}`)

