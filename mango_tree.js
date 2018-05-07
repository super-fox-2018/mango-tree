"use strict"

class FruitTree {
  constructor(props) {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._harvested = { total: 0, good: 0, bad: 0 };
    this._healthyStatus = true;
    this._growthFactor = props.growthFactor;
    this._matureAge = props.matureAge;
    this._maxGrowthAge = props.maxGrowthAge;
    this._maxAge = props.maxAge;
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
    return `${this._harvested.total} (${this._harvested.good} good, ${this._harvested.bad} bad)`;
  }

  // Grow the tree
  grow() {
    this._age += 1;
    if (this._age <= this._maxGrowthAge) {
      const growth = this._growthFactor * Math.random() * this._age;
      this._height += growth;
    }
    if (this._age > this._maxAge) {
      this._healthyStatus = false;
    }
  }

  // Produce some fruits
  produceFruits() {
    if (this._age >= this._matureAge && this.healthyStatus) {
      const numOfFruits = Math.floor(Math.random() * 50 * this._age) + 1;
      for (let i = 0; i < numOfFruits; i += 1) {
        const fruit = new Fruit();
        this._fruits.push(fruit);
      }
    }
  }

  // Get some fruits
  harvest() {
    this._harvested.total = this._fruits.length;
    this._harvested.good = 0;
    this._harvested.bad = 0;
    for (let i = 0; i < this._harvested.total; i += 1) {
      if (this._fruits[i].quality === 'Good') {
        this._harvested.good += 1;
      } else {
        this._harvested.bad += 1;
      }
    }
    this._fruits = [];
  }
}

class Fruit {
  constructor() {
    this._quality = ['Good', 'Bad'][Math.floor(Math.random()*2)];
  }

  get quality() {
    return this._quality;
  }
}


class MangoTree extends FruitTree {
  constructor(props) {
    super({ 
      growthFactor: props.growthFactor || 0.3,
      matureAge: props.matureAge || 2, 
      maxGrowthAge: props.maxGrowthAge || 10, 
      maxAge: props.maxAge || 20
    });
  }

  produceMangoes() {
    super.produceFruits();
  }
}

class AppleTree extends FruitTree {
  constructor(props) {
    super({ 
      growthFactor: props.growthFactor || 0.2,
      matureAge: props.matureAge || 3, 
      maxGrowthAge: props.maxGrowthAge || 8, 
      maxAge: props.maxAge || 18
    });
  }

  produceApples() {
    super.produceFruits();
  }
}

class PearTree extends FruitTree {
  constructor(props) {
    super({ 
      growthFactor: props.growthFactor || 0.22,
      matureAge: props.matureAge || 2, 
      maxGrowthAge: props.maxGrowthAge || 9, 
      maxAge: props.maxAge || 21
    });
  }

  producePears() {
    super.produceFruits();
  }
}


console.log('============================MANGO===================================')
let mangoTree = new MangoTree({}  )
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  if (mangoTree.healthyStatus) {
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)} m| Fruits harvested = ${mangoTree.harvested}`)
  } else {
    console.log('The tree has met its end. :sad:')
  }
} while (mangoTree.healthyStatus !== false)

console.log('============================APPLE===================================')
let appleTree = new AppleTree({}  )
do {
  appleTree.grow();
  appleTree.produceApples();
  appleTree.harvest();
  if (appleTree.healthyStatus) {
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(1)} m| Fruits harvested = ${appleTree.harvested}`)
  } else {
    console.log('The tree has met its end. :sad:')
  }
} while (appleTree.healthyStatus !== false)

console.log('=============================PEAR===================================')
let pearTree = new PearTree({}  )
do {
  pearTree.grow();
  pearTree.producePears();
  pearTree.harvest();
  if (pearTree.healthyStatus) {
    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height.toFixed(1)} m| Fruits harvested = ${pearTree.harvested}`)
  } else {
    console.log('The tree has met its end. :sad:')
  }
} while (pearTree.healthyStatus !== false)