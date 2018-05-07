"use strict"

// release 0

class MangoTree {
  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._goodCounter = 0;
    this._badCounter = 0;
    this._healthyStatus = true;
    this._isHarvesting = false;
  }

  get age() {
    return this._age;
  }

  get height() {
    return `${this._height} m`;
  }

  get fruits() {
    return this._fruits;
  }

  get healthyStatus() {
    return this._healthyStatus;
  }

  get harvested() {
    // return this._harvested // return (string)
    // <number> (<numberGood> good, <numberBad> bad)
    return `${this._fruits.length} (${this._goodCounter} good, ${this._badCounter} bad)`
  }


  // Get current states here

  // Grow the tree
  grow() {
    // tambah tahun in year format
    let year = this._age;
    // tentukan mature age, pohon dpt berbuah ketika mencapai mature age
    let matureAge = 5;
    if (year >= matureAge) {
      this._isHarvesting = true;
    }
    // tambah tinggi pohon random number
    // tentukan umur pohon berhenti bertumbuh tinggi
    let maxHeightAge = 10;
    if (year !== maxHeightAge) {
      //random between 0.1 - 0.9m
      let randomString = String(Math.random() * (0.9 - 0.1) + 0.1);
      let randomGrow = Number(randomString.slice(0,3));
      this._height = this._height + randomGrow;
    }
    // tentukan umur pohon tsb mati
    let maxAge = 20;
    if (year >= maxAge) {
      this._healthyStatus = false;
    }

    year++;
    this._age = year;
  }

  // Produce some mangoes
  produceMangoes() {
    // 1. menghasilkan buah mangga
    // 2. atribut fruits telah memiliki value beberapa object mango, jumlahnya random
    if (this._isHarvesting === true) {
      let randomNumber = Math.floor(Math.random() * (10 - 1) + 1);
      let counter = 0;
      while (counter < randomNumber) {
        let mango = new Mango();
        this._fruits.push(mango);
        counter++;
      }
      //console.log(this._fruits);
    }
  }

  // Get some fruits
  harvest() {
    // mengambil buah
    if (this._isHarvesting === true) {
      let fruits = this._fruits;
      for (let i = 0; i < fruits.length; i++) {
        if (fruits[i].quality === 'good') this._goodCounter++;
        if (fruits[i].quality === 'bad') this._badCounter++;
      }
    }
  }

}

class Mango {
  // Produce a mango
  constructor() {
    // atribut quality memiliki default value yang isinya random antara good/bad
    this._quality = this.randomQuality();
  }
  
  get quality() {
    return this._quality;
  }

  randomQuality() {
    let quality = ['good', 'bad']
    let randomPick = Math.floor(Math.random() * quality.length);

    return quality[randomPick];
  }
}

// let mangoTree = new MangoTree();
// mangoTree.produceMangoes()

//driver code untuk release 0
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthyStatus != false)
console.log(`The tree has met his end.`)

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
