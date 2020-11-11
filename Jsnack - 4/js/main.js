let squadre = [
  {
    nome: "Milan",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Roma",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Napoli",
    puntiFatti: 0,
    falliSubiti: 0,
  },
];

// 4B

for (let i = 0; i < squadre.length; i++) {
  randOne = Math.floor(Math.random() * 10);
  randTwo = Math.floor(Math.random() * 10);
  squadre[i].falliSubiti = randOne;
  squadre[i].puntiFatti = randTwo;
}

console.log(squadre);
