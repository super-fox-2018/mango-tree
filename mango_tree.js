"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._fruits = 0;
    this._health = true;
    this._harvested = 0;
    this._matureAge = Math.round(Math.random() * (10 - 5) + 15)
    this._maxAge = Math.round(Math.random() * (30 - 20) + 20)
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

  get healthStatus() {
    return this._health;
  }

  get harvested() {
    return this._harvested;
  }


  // Get current states here

  // Grow the tree
  grow() {
    //this._maxAge = Math.round(Math.random() * (30 - 20) + 20)
    this._age += 1;
    let height = this._height;
    // console.log(this._age);
    if (this._age < this._matureAge) {
      this._height += Math.random() * 2;
    }

    if (this._age >= this._maxAge) {
      this._health = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {

  }

  // Get some fruits
  harvest() {
    // let growth = this.grow()
    let randomHarvested = Math.floor(Math.random() * (5) + 20) + 1
    if (this._age < this._maxAge) {
      this._harvested += randomHarvested
    }
    // console.log(randomHarvested)
  }

}

class Mango {
  // Produce a mango
  constructor() {
  }
}


   // driver code untuk release 0
   let mangoTree = new MangoTree()
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)}m | Fruits harvested = ${mangoTree.harvested}`)
     /* to fixed is for rounding to 1 decimal point */
   } while (mangoTree._health != false)

   console.log (`The tree has met its end. :(`)


// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
