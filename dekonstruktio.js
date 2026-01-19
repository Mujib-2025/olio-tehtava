const numerot = [10, 20, 30, 40];

const [eka, ...loput] = numerot;

console.log("tehtva 1:");
console.log("eka:", eka);
console.log("loput:", loput);

console.log("----------------------------");
const opiskelija = {
  nimi: "Ville",
  ika: 34,
  koulutus: "Datanomi",
  kaupunki: "Helsinki",
};

const { nimi, ika, ...muutTiedot } = opiskelija;

console.log("Tehtava 2:");
console.log("Nimi:", nimi);
console.log("Ikä:", ika);
console.log("Muut tiedot:", muutTiedot);

console.log("----------------------------");

const backend = ["Node.js", "SQL"];
const frontend = ["HTML", "CSS", "JavaScript"];

const fullstack = [...backend, ...frontend, "Git"];

console.log("Tehtävä 3:");
console.log("Fullstack:", fullstack);

console.log("----------------------------");

const perusTiedot = {
  nimi: "Anna",
  ika: 19,
};

const lisatiedot = {
  kaupunki: "Espoo",
  harrastus: "Ohjelmointi",
};

const kayttaja = { ...perusTiedot, ...lisatiedot, aktiivinen: true };

console.log("Tehtvä 4:");
console.log("Kayttaja:", kayttaja);
