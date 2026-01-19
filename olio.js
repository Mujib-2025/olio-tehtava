const opiskelija = {
  nimi: "Matti Meikäläinen",
  ika: 21,
  kurssi: "Ohjelmoinnin perusteet",
};

console.log("Opiskelijan tiedot:");
console.log("Nimi:", opiskelija.nimi);
console.log("Ikä:", opiskelija.ika);
console.log("Kurssi:", opiskelija.kurssi);

console.log("----------------------------");

class Auto {
  constructor(merkki, malli, vuosimalli) {
    this.merkki = merkki;
    this.malli = malli;
    this.vuosimalli = vuosimalli;
  }

  tulostaTiedot() {
    console.log("Auto:", this.merkki, this.malli, this.vuosimalli);
  }
}

const auto1 = new Auto("Toyota", "Corolla", 2016);
const auto2 = new Auto("Volvo", "V70", 2012);

auto1.tulostaTiedot();
auto2.tulostaTiedot();

console.log("----------------------------");

const kirjat = [
  {
    nimi: "Seitsemän veljestä",
    kirjailija: "Aleksis Kivi",
    vuosi: 1870,
  },
  {
    nimi: "Tuntematon sotilas",
    kirjailija: "Väinö Linna",
    vuosi: 1954,
  },
  {
    nimi: "Risto Räppääjä",
    kirjailija: "Sinikka Nopola",
    vuosi: 1997,
  },
];

console.log("Kirjat:");

kirjat.forEach((kirja) => {
  console.log(
    "Nimi:",
    kirja.nimi,
    "| Kirjailija:",
    kirja.kirjailija,
    "| Vuosi:",
    kirja.vuosi,
  );
});
