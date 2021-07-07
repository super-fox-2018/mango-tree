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

    this._age = 0
    this._maxAge = 10;
    this._mature = 3;

    this._stopHeight = 10
    this._bad = 0;
    this._good = 0

    this._bucket = []
    this._totals = 0;
  }


  get age() {
    return this._age
  }

  get height() {
    return this._height + ' m'
  }
  get fruits() {
    return this._fruit
  }

  get status() {
    return this._status
  }

  get harvested() {

    // return this._harvested
    return this._totals

  }
  get bucket() {
    return this._bucket
  }
  // Get current states here

  // Grow the tree
  grow() {
    let tinggi = Math.floor(Math.random() * 3)
    this._bucket = []
    //age
    if (this._age < this._maxAge) {
      this._age += 1
    }

    if (this._age === this._maxAge) {
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
      this._harvested += Math.floor(Math.random() * 5);

      // this._bucket = []


      for (let i = 0; i < this._harvested; i++) {
        let mango = new Mango();
        this._bucket.push(mango)
      }
    }
  }

  // Get some fruits
  harvest() {


    for (let i = 0; i < this._bucket.length; i++) {
      if (this._bucket[i].quality === 'good') {
        this._good += 1
      } else {
        this._bad += 1
      }
    }
    this._totals = this._bucket.length
    this._totals += ' good:' + this._good + ' bad: ' + this._bad
    this._good = 0;
    this._bad = 0;
    return this._totals;

  }
}

class Mango {
  // Produce a mango
  constructor() {

    let status = ['good', 'bad']
    let kualitas = status[Math.floor(Math.random() * 2)]
    this.quality = kualitas

  }

}

console.log('\n ----------- MANGO TREE -------------')
// * driver code untuk release 0
console.log('\nThe tree is alive: ---')

let mangoTree = new MangoTree()

do {


  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested} `)
} while (mangoTree.status != false)
console.log('\n The tree has met its end: ---')



// ------------------------------  APPLE TREE ------------------------ //

// release 2

class AppleTree {
  // Initialize a new MangoTree
  constructor() {

    this._height = 0
    this._total = 0
    this._fruit = 0
    this._harvested = 0;
    this._status = true

    this._age = 0
    this._maxAge = 15;
    this._mature = 3;

    this._stopHeight = 15
    this._bad = 0;
    this._good = 0

    this._bucket = []
    this._totals = 0;
  }


  get age() {
    return this._age
  }

  get height() {
    return this._height + ' m'
  }
  get fruits() {
    return this._fruit
  }

  get status() {
    return this._status
  }

  get harvested() {

    // return this._harvested
    return this._totals

  }

  get bucket() {
    return this._bucket
  }
  // Get current states here

  // Grow the tree
  grow() {
    let tinggi = Math.floor(Math.random() * 3)
    //age
    if (this._age < this._maxAge) {
      this._age += 1
    }

    if (this._age === this._maxAge) {
      this._status = false
    }

    //height
    if (this._age < this._stopHeight) {
      this._height += tinggi
    }


  }

  // Produce some Apples
  produceApple() {
    if (this._age > this._mature && this._age < this._maxAge) {
      this._harvested += Math.floor(Math.random() * 8);

      // this._bucket = []
      for (let i = 0; i < this._harvested; i++) {
        let apple = new Apple();
        this._bucket.push(apple)
      }
    }
  }



  // Get some fruits
  harvest() {

    for (let i = 0; i < this._bucket.length; i++) {
      if (this._bucket[i].quality === 'good') {
        this._good += 1
      } else {
        this._bad += 1
      }
    }
    this._totals = this._bucket.length
    this._totals += ' good:' + this._good + ' bad: ' + this._bad
    this._good = 0;
    this._bad = 0;
    return this._totals;

  }
}

class Apple {
  // Produce apples
  constructor() {

    let status = ['good', 'bad']
    let kualitas = status[Math.floor(Math.random() * 2)]
    this.quality = kualitas
  }
}

console.log('\n ----------- Apple TREE -------------')
// * driver code untuk release 2
console.log('\nThe tree is alive: ---')

let appleTree = new AppleTree()

do {
  appleTree.grow();
  appleTree.produceApple();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested} `)
} while (appleTree.status != false)
console.log('The tree has met its end. ')




// Release 2
class FruitTree {

}
class Fruit {

}

module.exports = {
  MangoTree,
  appleTree
}
