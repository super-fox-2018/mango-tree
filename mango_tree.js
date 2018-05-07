"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor(age, height, fruits, healtyStatus) {
    this._age = age
    this._height = height
    this._fruits = fruits
    this._healtyStatus = healtyStatus
  }

  get age() {
    return this._age
  }
  get height() {
    return this.height
  }
  get fruits() {
    return this.fruits
  }
  get healtyStatus() {
    return this.healtyStatus
  }
  get harvested() {
    return this._harvested
  }


  // Get current states here

  // Grow the tree
  grow() {
    
    for(let x=0; x<20; x++) {
      
    }
  }

  // Produce some mangoes
  produceMangoes() {

  }

  // Get some fruits
  harvest() {

  }

}

class Mango {
  // Produce a mango
  constructor() {
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
