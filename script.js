'use strict';

let rollNewNumber = function () {
  const a = Math.trunc(Math.random() * 9) + 1;
  return a;
};

let rollNewNumberKids = function () {
  const b = Math.trunc(Math.random() * 4) + 1;
  return b;
};

const personen = [
  'Lisa',
  'Ritva',
  'Bernd',
  'Ina',
  'Philipp',
  'Sara',
  'Daniel',
  'Robin',
  'Lina',
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
let zufallsZahlenGezogene = [];

// Button Wichteln
document.querySelector('.btn').addEventListener('click', function () {
  // 1.Array von Zufallszahlen
  for (let i = 0; zufallsZahlen.length < personen.length; i++) {
    let a = rollNewNumber() - 1;
    if (zufallsZahlen.includes(a)) {
      continue;
    } else {
      zufallsZahlen.push(a);
    }
  }
  // 2.Array von Zufallszahlen
  for (let i = 0; zufallsZahlenGezogene.length < personen.length; i++) {
    let a = rollNewNumber() - 1;
    if (
      zufallsZahlenGezogene.includes(a) ||
      zufallsZahlen[zufallsZahlenGezogene.length] === a
    ) {
      continue;
    } else {
      zufallsZahlenGezogene.push(a);
    }
  }
  for (let i = 0; i < personen.length; i++) {
    document.getElementById(`inhalte--${i}`).textContent = `${
      personen[zufallsZahlen[i]]
    } hat ${personen[zufallsZahlenGezogene[i]]} gezogen.`;
  }
});
