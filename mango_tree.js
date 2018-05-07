"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {

    this._height = 0
    this._total = 0
    this._fruit = 0
    this._harvested = 0;
    this._status = true

    this._age = 0;
    this._maxAge = 10;
    this._mature = 3;

    this._stopHeight = 3
    this._bad = 0;
    this._good = 0


  }


  get age() {
    return this._age
  }

  get height() {
    return this._height
  }
  get fruits() {
    return this._fruit
  }

  get healtyStatus() {
    return this._status
  }

  get harvested() {

    return this._harvested

  }

  // Get current states here

  // Grow the tree
  grow() {
    let tinggi = (Math.random() * 1).toFixed(2)
    //age
    if (this._age < this._maxAge) {
      this._age += 1
    } else {
      this._status = false
    }

    //height
    if (this._age < this._stopHeight) {
      this._height += tinggi
    }

  }

  // Produce some mangoes
  produceMangoes() {
    if (this._age > this._mature && this._age < this._maxAge) {
      this._fruit += Math.floor(Math.random() * 10);
    }
  }

  // Get some fruits
  harvest() {
    this._harvested += this._fruit
    let bad = parseInt(Math.random() * this._harvested)
    this._bad = bad
    this._good = this._harvested - bad
  }

}

class Mango {
  // Produce a mango
  constructor(quality) {

  }
}


/**
 * driver code untuk release 0
 * let mangoTree = new MangoTree()
 * do {
 *   mangoTree.grow();
 *   mangoTree.produceMangoes();
 *   mangoTree.harverst();
 *   console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
 * } while (mangoTree.healthyStatus != false)
 */

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
