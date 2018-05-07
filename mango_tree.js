// "use strict"

// // release 0
// class MangoTree { // extends FruitTree
//   // Initialize a new MangoTree
//   constructor() {
//     this._age = 0
//     this._height = 0
//     this._fruits = 0
//     this._harvested = null
//     this._healthyStatus = true
//     this._maxAge = 10
//     this._totalFruits = 200
//     // super()
//   }
//   get age() {
//     return this._age
//   }
//   get height() {
//     var treeHeight = `${this._height/100} m`; //dibagi 100 biar tingginya nggak lebay
//     return treeHeight
//   }
//   get fruits() {
//     return this._fruits;
//   }
//   get healthyStatus() {
//     return this._healthyStatus
//   }
//   get harvested() {
//     let bad = 0
//     let good = 0
//     for (var i = 0; i < this._harvested.length; i++) { //
//       if (this._harvested[i].isGood) {
//         good++
//       } else {
//         bad++
//       }
//     }
//     return `${this._fruits} (${good} good, ${bad} bad)`; // untuk baca hasil nama buah dan juga yg good and bad brapa
//   }
//   // Get current states here
//   // Grow the tree
//   grow() {
//     this._age += 1
//     if (this._age > this._maxAge) {
//       this._healthyStatus = false
//       // console.log("The tree has met its end. :sad: ")
//     } 
//     else {
//       let growing = Math.floor(Math.random() * 200) // range tinggi
//       this._height += growing
//     }
//   }
//   // Produce some mangoes
//   produceMangoes() {
//     if (this._age >= 1) {
//       let fruitNum = Math.floor(Math.random() * this._totalFruits) + 1;
//       this._fruits = fruitNum
//     }
//   }
//   // Get some fruits
//   harvest() {
//     var harvested = [] // yg tadinya di atas null skrng disini dijadikan array supaha bisa diinput fruits nya
//     for (let i = 0; i < this._fruits; i++) {
//       let mango = new Mango()
//       harvested.push(mango)
//     }
//     this._harvested = harvested
//   }
// }

// class Mango {
//   // Produce a mango
//   constructor(result) {
//     this.result = this.getQuality()
//   }
//   getQuality() {
//     var quality = Math.floor(Math.random() * 2)
//     if (quality === 0) {
//       return true
//     } 
//     else {
//       return false
//     }
//   }
// }

// // driver code untuk release 0
// console.log("The tree is alive! :smile:")
// let mangoTree = new MangoTree()
// do {
//   mangoTree.grow()
//   mangoTree.produceMangoes()
//   mangoTree.harvest()
//   if (mangoTree.healthyStatus === true){
//     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
//   }
//   else {
//     console.log("The tree has met its end :sad:")
//   }
// } while (mangoTree.healthyStatus != false);

// // Release 1
// class AppleTree {
//   constructor() {
//     this._age = 0;
//     this._height = 0;
//     this._fruits = 0;
//     this._harvested = null;
//     this._healthyStatus = true;
//     this._maxAge = 10;
//     this._totalFruits = 200;
//   }
//   get age() {
//     return this._age;
//   }
//   get height() {
//     let appleTreeHeight = `${this._height/100} m`;
//     return appleTreeHeight;
//   }
//   get fruits() {
//     return this._fruits;
//   }
//   get healthyStatus() {
//     return this._healthyStatus;
//   }
//   get harvested() {
//     let bad = 0;
//     let good = 0;
//     for (var i = 0; i < this._harvested.length; i++) {
//       if (this._harvested[i].isGood) {
//         good++;
//       } 
//       else {
//         bad++;
//       }
//     }
//     return `${this._fruits} (${good} good, ${bad} bad)`;
//   }
//   grow() {
//     this._age+=1;
//     if (this._age > this._maxAge) {
//       this._healthyStatus = false;
//     } else {
//       let growing = Math.floor(Math.random() * 200) // range tinggi
//       this._height += growing;
//     }
//   }
//   produceApple() {
//     if (this._age >= 1) {
//       let fruitNum = Math.floor(Math.random() * this._totalFruits) + 1;
//       this._fruits = fruitNum;
//     }
//   }
//   harvest() {
//     let harvested = [];
//     for (var i = 0; i < this._fruits; i++) {
//       var apple = new Apple();
//       harvested.push(apple);
//     }
//     this._harvested = harvested;
//   }
// }

// class Apple {
//   constructor(result) {
//     this.result = this.getQuality();
//   }
//   getQuality() {
//     let quality = Math.floor(Math.random() * 2);
//     if (quality === 0) {
//       return true;
//     } 
//     else {
//       return false;
//     }
//   }
// }

// // console untuk si apple
// console.log('\n', '==========================APPLE======================');
// console.log("")
// console.log("The tree is alive! :smile:")
// let appleTree = new MangoTree()
// do {
//   appleTree.grow();
//   appleTree.produceMangoes();
//   appleTree.harvest();
//   if (appleTree.healthyStatus === true){
//     console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
//   }
//   else {
//     console.log("The tree has met its end :sad:")
//   }
// } while (appleTree.healthyStatus != false);

// Release 2
class FruitTree {
  constructor(object) { // maxAge, totalFruits, minGrowth, maxGrowth
    this._age = 0
    this._height = 0
    this._harvested = 0
    this._healthyStatus = true
    this._fruits = 0
    this._minGrowth = object.minGrowth
    this._maxGrowth = object.maxGrowth
    this._totalFruits = object.totalFruits
    this._maxAge = object.maxAge
  }

  get age() {
    return this._age;
  }

  get height() {
    let tree = `${this._height/100} m`;
    return tree;
  }

  get fruits() {
    return this._fruits;
  }

  get healthyStatus() {
    return this._healthyStatus;
  }

  get harvested() {
    let bad = 0
    let good = 0
    for (var i = 0; i < this._harvested.length; i++) {
      if (this._harvested[i].status) {
        good++
      }
      else {
        bad++
      }
    }
    return `${this._fruits} (${good} good, ${bad} bad)`;
  }

  grow() {
    this._age += 1
    if (this._age > this._maxAge) {
      this._healthyStatus = false
    } 
    else {
      let heightGrowth = Math.floor(Math.random() * (this._maxGrowth - this._minGrowth + 1)) + this._minGrowth;
      this._height += heightGrowth
    }
  }

  produceFruits() {
    if (this._age >= 1) {
      let fruitNum = Math.floor(Math.random() * this._totalFruits) + 1
      this._fruits = fruitNum
    }
  }

  harvest() {
    let harvested = []
    for (var i = 0; i < this._fruits; i++) {
      let apple = new Apple()
      harvested.push(apple)
    }
    this._harvested = harvested
  }
}

class Fruit {
  constructor() {
    this.status = this.getQuality()
  }

  getQuality() {
    let quality = Math.floor(Math.random() * 2)
    if (quality === 0) {
      return true
    }
    else {
      return false
    }
  }
}

class MangoTree extends FruitTree{
  constructor(object) {
    super(object)
  }

  harvest() {
    let harvested = []
    for (var i = 0; i < this._fruits; i++) {
      let mango = new Mango()
      harvested.push(mango)
    }
    this._harvested = harvested;
  }
}

class Mango extends Fruit { // otomatis jalanin yg di Fruit jd g pakai constructor gpp
}

let mangoTree = new MangoTree({
  maxAge : 10, 
  totalFruits : 200 ,
  minGrowth : 1,
  maxGrowth : 10
})
console.log("=============================MANGO===========================")
console.log("The tree is alive! :smile:")
do {
  mangoTree.grow()
  mangoTree.produceFruits()
  mangoTree.harvest()
  if(mangoTree.healthyStatus === true){
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | MANGO | Fruits harvested = ${mangoTree.harvested}`)
  }
  else {
    console.log("The tree has met its end :sad:")
  }
} while (mangoTree.healthyStatus != false);

class AppleTree extends FruitTree{
  constructor(object) {
    super(object)
  }

  harvest() {
    let harvested = []
    for (var i = 0; i < this._fruits; i++) {
      let apple = new Mango()
      harvested.push(apple);
    }
    this._harvested = harvested;
  }
}

class Apple extends Fruit { // otomatis jalanin yg di Fruit jd g pakai constructor gpp
}

let appleTree = new AppleTree({
  maxAge : 10, 
  totalFruits : 200 ,
  minGrowth : 1,
  maxGrowth : 10
})
console.log("=============================APPLE===========================")
console.log("The tree is alive! :smile:")
do {
  appleTree.grow()
  appleTree.produceFruits()
  appleTree.harvest()
  if(appleTree.healthyStatus === true){
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | APPLE | Fruits harvested = ${appleTree.harvested}`)
  }
  else {
    console.log("The tree has met its end :sad:")
  }
} while (appleTree.healthyStatus != false);

class Pear extends FruitTree{
  constructor(object) {
    super(object)
  }

  harvest() {
    let harvested = []
    for (var i = 0; i < this._fruits; i++) {
      let pear = new Mango()
      harvested.push(pear)
    }
    this._harvested = harvested
  }
}

class PearTree extends Fruit { // otomatis jalanin yg di Fruit jd g pakai constructor gpp
}

let pearTree = new AppleTree({
  maxAge : 10, 
  totalFruits : 200 ,
  minGrowth : 1,
  maxGrowth : 10
})
console.log("=============================PEAR===========================")
console.log("The tree is alive! :smile:")
do {
  pearTree.grow()
  pearTree.produceFruits()
  pearTree.harvest()
  if(pearTree.healthyStatus === true){
    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | PEAR | Fruits harvested = ${pearTree.harvested}`)
  }
  else {
    console.log("The tree has met its end :sad:")
  }
} while (pearTree.healthyStatus != false)