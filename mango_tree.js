"use strict"

// release 0

// class MangoTree {

//   // Initialize a new MangoTree
//   constructor() {
//     this._age = 0
//     this._height = 0
//     this._matureAge = 3
//     this._stopGrow = 15
//     this._deadAge = 20
//     this._fruitsProduced = 0
//     //this._capacity = 20
//     this._fruits = []
//     this._harvested = 0
//     this._bad = 0
//     this._good = 0
//     this._healthyStatus = true
//   }

//   get age() {
//     return this._age
//   }

//   get height() {
//     return this._height
//   }

//   get fruits() {
//     return this._fruits
//   }

//   get healthyStatus() {
//     return this._healthyStatus
//   }

//   get harvested() {
//     let result = `${this._fruits.length} (${this._good} good ${this._bad} bad)`
//      this._harvested =result
//     return this._harvested

//   }


//   // Get current states here

//   // Grow the tree
//   grow() {
//     this._fruits=[]
//     this._good = 0
//     this._bad = 0

//     this._age++
//     if(this._age <= this._stopGrow) {
//       this._height = this._height+(Math.floor(Math.random()*10)+1)
//     }

//     if(this._age == this._deadAge) {
//       this._healthyStatus =false
//     }

//   }

//   // Produce some mangoes
//   produceMangoes() {
//     let random = Math.floor(Math.random()*35+1)
//     if(this._age >= this._matureAge && this._age <= this._deadAge) {
//       this._fruitsProduced = random
//     }
//   }

//   // Get some fruits
//   harvest() {
//     for(let i=0;i<this._fruitsProduced;i++) {
//       let mango = new Mango()
//       this._fruits.push(mango)
//     }

//     for(let j=0;j<this._fruits.length;j++) {
//       if(this._fruits[j].quality == "good") {
//         this._good++
//       }else{
//         this._bad++
//       }
//     }
//   }

// }

// class Mango {
//   // Produce a mango
//   constructor() {
//     this.quality = this.mangoQuality()
//   }

//   mangoQuality() {
//     var quality = ["good","bad"]
//     let random = Math.round(Math.random())
//     return quality[random]
//   }
// }

// // console.log(mangoTree)


//  // * driver code untuk release 0
//    let mangoTree = new MangoTree()
//    do {
//      mangoTree.grow();
//      mangoTree.produceMangoes();
//      mangoTree.harvest();
//      console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
//    } while (mangoTree.healthyStatus != false)
  

// // Release 1
// class AppleTree {
//   constructor() {
//     this._age = 0
//     this._height = 0
//     this._matureAge = 5 // beda
//     this._stopGrow = 17 // beda
//     this._deadAge = 25 // beda
//     this._fruitsProduced = 0
//     //this._capacity = 20
//     this._fruits = []
//     this._harvested = 0
//     this._bad = 0
//     this._good = 0
//     this._healthyStatus = true
//   }

//   get age() {
//     return this._age
//   }

//   get height() {
//     return this._height
//   }

//   get fruits() {
//     return this._fruits
//   }

//   get healthyStatus() {
//     return this._healthyStatus
//   }

//   get harvested() {
//     let result = `${this._fruits.length} (${this._good} good ${this._bad} bad)`
//      this._harvested =result
//     return this._harvested

//   }


//   // Get current states here

//   // Grow the tree
//   grow() {
//     this._fruits=[]
//     this._good = 0
//     this._bad = 0

//     this._age++
//     if(this._age <= this._stopGrow) {
//       this._height = this._height+(Math.floor(Math.random()*10)+1)
//     }

//     if(this._age == this._deadAge) {
//       this._healthyStatus =false
//     }

//   }

//   // Produce some mangoes
//   produceMangoes() {
//     let random = Math.floor(Math.random()*35+1)
//     if(this._age >= this._matureAge && this._age <= this._deadAge) {
//       this._fruitsProduced = random
//     }
//   }

//   // Get some fruits
//   harvest() {
//     for(let i=0;i<this._fruitsProduced;i++) {
//       let apple = new Apple()
//       this._fruits.push(apple)
//     }

//     for(let j=0;j<this._fruits.length;j++) {
//       if(this._fruits[j].quality == "good") {
//         this._good++
//       }else{
//         this._bad++
//       }
//     }
//   }
// }
// class Apple {
//   constructor() {
//     this.quality=this.appleQuality()
//   }

//   appleQuality() {
//     let quality = ['good','bad']
//     let random = Math.round(Math.random())

//     return quality[random]
//   }
// }

// let appleTree = new AppleTree()
//    do {
//      appleTree.grow();
//      appleTree.produceMangoes();
//      appleTree.harvest();
//      console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
//    } while (appleTree.healthyStatus != false)

// Release 2
class FruitTree {
  constructor(matureAge,stopGrow,deadAge,treeType) {
    this._age = 0
    this._height = 0
    this._matureAge = matureAge // beda
    this._stopGrow = stopGrow // beda
    this._deadAge = deadAge // beda
    this._fruitsProduced = 0
    //this._capacity = 20
    this._fruits = []
    this._harvested = 0
    this._bad = 0
    this._good = 0
    this._healthyStatus = true
    this._treeType=treeType
  }

  get type() {
    return this._treeType
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
    return this._healthyStatus
  }

  get harvested() {
    let result = `${this._fruits.length} (${this._good} good ${this._bad} bad)`
     this._harvested =result
    return this._harvested

  }


  // Get current states here

  // Grow the tree
  grow() {
    this._fruits=[]
    this._good = 0
    this._bad = 0

    this._age++
    if(this._age <= this._stopGrow) {
      this._height = this._height+(Math.floor(Math.random()*10)+1)
    }

    if(this._age == this._deadAge) {
      this._healthyStatus =false
    }

  }

  // Produce some mangoes
  produce() {
    let random = Math.floor(Math.random()*35+1)
    if(this._age >= this._matureAge && this._age <= this._deadAge) {
      this._fruitsProduced = random
    }
  }

  // Get some fruits
  harvest() {
    for(let i=0;i<this._fruitsProduced;i++) {
      if(this._treeType == "MangoTree") {
        let mango = new Mango()
        this._fruits.push(mango)  
      }else if(this._treeType == "AppleTree") {
        let apple = new Apple()
        this._fruits.push(apple)
      }else {
        let pear = new Pear()
        this._fruits.push(pear)
      }
      
    }

    for(let j=0;j<this._fruits.length;j++) {
      if(this._fruits[j].quality == "good") {
        this._good++
      }else{
        this._bad++
      }
    }
  }
}

class Fruit {
  constructor() {
    this.quality=this.fruitQuality()
  }

  fruitQuality() {
    let quality = ['good','bad']
    let random = Math.round(Math.random())

    return quality[random]
  }
}


class AppleTree extends FruitTree {
  constructor() {
    super(5,17,25,"AppleTree")
  }

}

class Apple extends Fruit {
  constructor() {
    super()
  }
}



class MangoTree extends FruitTree {
  constructor() {
    super(3,15,20,"MangoTree")
  }

}

class Mango extends Fruit {
  constructor() {
    super()
  }
}

class PearTree extends FruitTree {
  constructor() {
    super(1,12,25,"PearTree")
  }

}

class Pear extends Fruit {
  constructor() {
    super()
  }
}

// var pearTree = new PearTree()
// pearTree.grow();
// pearTree.produce();

// pearTree.harvest();


//console.log(pearTree)


var appleTree = new AppleTree()
do {
     appleTree.grow();
     appleTree.produce();
     appleTree.harvest();
     console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
   } while (appleTree.healthyStatus != false)