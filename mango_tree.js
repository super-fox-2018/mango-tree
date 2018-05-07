"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor(obj) {
    this._age = 0;
    this._height = 0;

    this._statusHealty = true;
    this._harvested = 0;
    this._quality = ['good','bad'];
    this._good = 0;
    this._bad = 0;

    this._maxAge = 20;
    this._maxGrow = 70;
    this._maxFruit = 20;
    this._matureAge = 1;

  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
  }

  get healtyStatus() {
    return this._statusHealty;
  }

  get harvested() {
    return this._harvested;
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age += 1;
    this._height = Math.floor(Math.random()*this._age);


    if (this._height<this._maxGrow) {
      this._height += Math.floor(Math.random()*5)
    }
    if (this._age>=this._maxAge) {
      this._healthy = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    if(this._age>=this._matureAge){
      var qualty = '';
      this._harvested += 1;
      qualty = this._quality[Math.floor(Math.random()*2)];
      if(qualty==='good'){
        this._good += 1;
      }
      else if (qualty==='bad') {
        this._bad += 1;
      }
    }
  }

  // Get some fruits
  harvest() {

  }

}

class Mango {
  // Produce a mango
  constructor() {
    this._quality = ['good','bad'];

  }
}


  // * driver code untuk release 0
   // let mangoTree = new MangoTree()
   // do {
   //    // mangoTree.age();
   //   mangoTree.grow();
   //   mangoTree.produceMangoes();
   //   mangoTree.harvest();
   //   console.log(`[Year ${this._age} Report] Height = ${this._height} | Fruits harvested = ${this._harvest}`)
   // } while (mangoTree.healthyStatus != false);

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
