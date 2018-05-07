class AppleTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this._fruits = []
    this.matureAge = 3
    this.maxFruits = 30
    this.maxAge = 8
    this._harvested = 0
    this._healthyStatus = true
    this.badApple = 0
    this.goodApple = 0
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

  get healthyStatus() {
    return this._healthyStatus;
  }

  get harvested() {
    return `${this._harvested} , ${this.goodApple} good | ${this.badApple} bad`
  }


  // Get current states here


  // Grow the tree
  grow() {
    this._age++
    this._fruits = []
    this.goodApple = 0
    this.badApple = 0
    var random = Math.floor(Math.random() * 10)
    if (this._age < this.maxAge) {
      this._height += random
    }

    if (this._age >= this.maxAge) {
      this._healthyStatus = false
    }
  }

  // Produce some mangoes
  produceApples() {
    if (this._age >= this.matureAge) {
      let totalFruits = Math.floor(Math.random() * this.maxFruits)
      for (let i = 0; i < totalFruits; i++) {
        let appleTrees = new Apple()
        this._fruits.push(appleTrees)
      }
      this._harvested = this._fruits.length
    }
  }

  // Get some fruits
  harvest() {
    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i].appleQuality === 'bad') {
        this.badApple++
      } if (this._fruits[i].appleQuality === 'good'){
        this.goodApple++
      }
    }
  }

}

class Apple {
  // Produce a mango
  constructor() {
    this.appleQuality = this.quality()
  }

  quality() {
    let random = Math.floor(Math.random() * 2)
    if (random === 0) {
      return 'bad';
    } else if (random === 1) {
      return 'good';
    }
  }

}

// * driver code untuk release 1
let appleTree = new AppleTree()


do {
  appleTree.grow();
  appleTree.produceApples()
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height/10} m | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthyStatus != false)
