"use strict"

// release 0

class FruitTree {

  // Initialize a new MangoTree
  constructor(obj) {
    this._age = 0
    this._height = 0
    this.maxFruits = obj.maxFruits
    this._harvested = 0
    this.maxAge = obj.maxAge
    this.matureAge = obj.matureAge
    this._healthyStatus = true
    this._fruits = []
    this.badFruit = 0
    this.goodFruit = 0
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits
  }

  get healthyStatus() {
    return this._healthyStatus;
  }

  get harvested() {
    return `${this._harvested} , (${this.goodFruit} good , ${this.badFruit} bad)`
  }


  // Get current states here


  // Grow the tree
  grow() {
    this._age += 1
    this._fruits = []
    this.goodFruit = 0
    this.badFruit = 0
    var random = Math.floor(Math.random() * this.maxAge)
    if (this._age < this.maxAge) {
      this._height += random
    }
    if (this._age >= this.maxAge) {
      this._healthyStatus = false
    }
  }

  // Produce some mangoes
  produceFruits() {
    if (this._age >= this.matureAge && this._age <= this.maxAge) {
      var randomFruits = Math.floor(Math.random() * this.maxFruits)
      for (let i = 0; i < randomFruits; i++) {
        let totalFruits = new Fruit()
        this._fruits.push(totalFruits)
      }
      this._harvested = this._fruits.length
    }
  }

  // Get some fruits
  harvest() {
    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i].quality === 'bad') {
        this.badFruit++
      } else {
        this.goodFruit++
      }
    }
  }

}

class Fruit {
  // Produce a mango
  constructor() {
    this.quality = this.fruitQuality()
  }
  fruitQuality() {
    let random = Math.floor(Math.random() * 2)
    if (random === 0) {
      return 'bad';
    } else if (random === 1) {
      return 'good';
    }

  }
}



class MangoTree extends FruitTree {
  constructor() {
    let obj={
      maxFruits:30,
      maxAge:20,
      matureAge:5
    }
    super(obj)
  }
}

class AppleTree extends FruitTree {
  constructor() {

    let obj={
      maxFruits:50,
      maxAge:12,
      matureAge:3
    }
    super(obj)
  }
}

class PearTree extends FruitTree {
  constructor() {
    let obj={
      maxFruits:25,
      maxAge:15,
      matureAge:5
    }
    super(obj)
  }
}


// let mangoTree= new MangoTree()
//
// do {
//   mangoTree.grow();
//   mangoTree.produceFruits()
//   mangoTree.harvest();
//   console.log(`[Year ${mangoTree.age} Report Mango Tree] Height = ${mangoTree.height/10} m | Fruits harvested = ${mangoTree.harvested}`)
// } while (mangoTree.healthyStatus != false)



// let appleTree= new AppleTree()
//
// do {
//   appleTree.grow();
//   appleTree.produceFruits()
//   appleTree.harvest();
//   console.log(`[Year ${appleTree.age} Report Apple Tree] Height = ${appleTree.height/10} m | Fruits harvested = ${appleTree.harvested}`)
// } while (appleTree.healthyStatus != false)


// let pearTree= new PearTree()
//
// do {
//   pearTree.grow();
//   pearTree.produceFruits()
//   pearTree.harvest();
//   console.log(`[Year ${pearTree.age} Report Pear Tree] Height = ${pearTree.height/10} m | Fruits harvested = ${pearTree.harvested}`)
// } while (pearTree.healthyStatus != false)
