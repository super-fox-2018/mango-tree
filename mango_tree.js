"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() { 
    this.name = 'Fruits'
    this._age = 0
    this._height = 0
    this._healthy = true
    this._fruits = []
    this._maxAge = 20
    this._maxHeight = 10
    this._fruitsGood = 0
    this._fruitsBad = 0
  }

  get age() {
    return this._age
  }

  get height() {
    return this._height
  }

  get fruits() {
    return this._fruits
  }

  get healthyStatus() {
    return this._healthy
  }

  get harvested() {
    let result = `${this._fruits.length} (${this._fruitsGood} good, ${this._fruitsBad} bad}}`
    return result
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age++
    if (this.height < this._maxHeight) {
      this._height+= Math.floor(Math.random()*2)
    }
    if (this.age===this._maxAge) {
      this._healthy = false

    }
  }

  // Produce some mangoes
  produceMangoes() {
    return Math.floor(Math.random()*20+1)
  }

  // Get some fruits
  harvest() {
  let bucket = []
  let good = 0
  let bad = 0
  let mango = new Mango
    for(var i=0;i<this.produceMangoes();i++){
      bucket.push(Math.floor(Math.random()*2))
      
    }
    mango.qualityMango = []
    for(var i=0;i<bucket.length;i++){
      if (bucket[i]===1) {
        mango.qualityMango.push('good')
        good++
      }
      else{
        mango.qualityMango.push('bad')
        bad++
      }
    }
    mango.assignQuality()
    this._fruits = mango.qualityMango
    this._fruitsGood = mango.good
    this._fruitsBad = mango.bad
    return this._fruits
  }
}

class Mango {
  // Produce a mango
  constructor() {
    this.qualityMango = []
    this.good = 0
    this.bad = 0
  }
  assignQuality(){
    this.good = 0
    this.bad = 0
    for(var i=0;i<this.qualityMango.length;i++){
      if (this.qualityMango[i]==='good') {
        this.good++
      }
      else{
        this.bad++
      }
    }
  }
}


  //* driver code untuk release 0
   let tree = new MangoTree()
   let mango = new Mango
   do {
     tree.grow();
     tree.produceMangoes();
     tree.harvest();
     console.log(`[Year ${tree.age} Report] Height = ${tree.height} m | Fruits harvested = ${tree.harvested} `)
     //console.log(tree)
     //console.log(mango)
   } while (tree._healthy != false)
   console.log('Tree is dead')

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
