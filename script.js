"use strict";

// const personen = {
//   1: 'Lisa',
//   2: 'Ritva',
//   3: 'Bernd',
//   4: 'Lina',
//   5: 'Ina',
//   6: 'Philipp',
//   7: 'Sara',
//   8: 'Daniel',
//   9: 'Robin',
// };

// const kinder = { 10: 'Elias', 11: 'Ronja', 12: 'Paul', 13: 'Hanna' };

// let randomNumber = Math.trunc(Math.random() * 9) + 1;
// let randomNumber2 = Math.trunc(Math.random() * 4) + 1;

let rollNewNumber = function () {
  const a = Math.trunc(Math.random() * 9) + 1;
  return a;
};

let rollNewNumberKids = function () {
  const b = Math.trunc(Math.random() * 4) + 1;
  return b;
};

const personen = [
  "Lisa",
  "Ritva",
  "Bernd",
  "Ina",
  "Philipp",
  "Sara",
  "Daniel",
  "Robin",
  "Lina",
];
// const kinder = ['Elias', 'Paul', 'Hanna', 'Ronja'];
// const pärchen = [
//   'Ritva & Bernd',
//   'Ina & Philipp',
//   'Sara & Daniel',
//   'Lisa & Robin',
// ];

const ziehung = [];
let zufallsZahlen = [];
// let zufallsZahlenGezogene = [];

document.querySelector(".btn").addEventListener("click", function () {
  for (let i = 0; zufallsZahlen.length <= personen.length; i++) {
    let a = rollNewNumber();
    if (zufallsZahlen.includes(a)) {
      continue;
    } else {
      zufallsZahlen.push(a);
    }
  }
  console.log(zufallsZahlen);
  //   for (let i = 0; zufallsZahlenGezogene.length <= personen.length; i++) {
  //     let a = rollNewNumber();
  //     if (zufallsZahlenGezogene.includes(a)) {
  //       continue;
  //     } else {
  //       zufallsZahlenGezogene.push(a);
  //     }
  //   }
  //   for (let i = 0; i <= personen.length; i++) {
  //     document.querySelector(`inhalte${i}`).textContent = `${
  //       personen[zufallsZahlen[i]]
  //     } hat ${personen[zufallsZahlenGezogene[i]]} gezogen.`;
  //   }
});
