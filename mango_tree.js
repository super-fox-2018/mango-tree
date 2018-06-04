class FruitsTree {
  constructor(maxAge,matureAge,maxFruit) {
      this._age = 0;
      this._height = 0;
      this._statusHealty = true;
      this._harvested = 0;
      this._fruits = [];
      //
      this._maxAge = maxAge;
      this._matureAge = matureAge;
      this._maxFruit = maxFruit;
  }
  get age(){
    return this._age;
  }
  get height(){
    return this._height + ' m';
  }
  get fruit(){
    return this._fruits;
  }
  get healtyStatus(){
    return this._statusHealty;
  }
  get harvested(){
    return this._harvested;
  }
  grow(){
    this._age += 1;
    if (this._age<this._maxAge) {
      this._height += Math.floor(Math.random()*2);
    }
    if (this._age>=this._maxAge) {
      this._statusHealty = false;
    }
  }
  produce(){
    var save_fruits = new Fruit();
    var fruits = 0;
    if(this._age>=this._matureAge){
      fruits = Math.floor(Math.random()*this._maxFruit);
    }
    for (var i = 0; i < fruits; i++) {
      this._fruits.push(save_fruits);
    }
    return this._fruits;
  }
  harvest(){
    this._harvested = this._fruits.length;
    var good = 0;
    var bad = 0;
    for (var i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i]._quality=='good') {
        good += 1;
      }
      else {
        bad += 1;
      }
    }
    this._harvested += ` (${good} good + ${bad} bad)`;
    return this._harvested;
  }
}
class Fruit {
  constructor() {
    this._quality = this.fruitsQuality();
  }
  fruitsQuality (){
    var qualities = ['good','bad']
    var random = qualities[Math.floor(Math.random()*qualities.length)];
    return random;
  }
}

class MangoTree extends FruitsTree{
  constructor() {
    //maxAge, matureAge, maxFruit
    super(25,3,20);
  }
}
class Mango extends Fruit {
  constructor() {
    super();
  }
}

class AppleTree extends FruitsTree{
  constructor() {
    //maxAge, matureAge, maxFruit
    super(10,1,10);
  }
}
class Apple extends Fruit {
  constructor() {
    super();
  }
}

class PearTree extends FruitsTree{
  constructor() {
    super(15,2,12);
  }
}
class Pear extends Fruit {
  constructor() {
    super();
  }
}

//  * driver code untuk release 0
   let fruitsTree = new FruitsTree()
   let mangoTree = new MangoTree()
   let appleTree = new AppleTree()
   let pearTree = new PearTree()

  console.log('-------This is MangoTree---------')
  do {
   mangoTree.grow();
   mangoTree.produce();
   mangoTree.harvest();
   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
 } while (mangoTree._statusHealty !=  false)
 console.log('The Tree Has Met Its End :sad:')

 console.log('-------This is AppleTree---------')
 do {
  appleTree.grow();
  appleTree.produce();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree._statusHealty !=  false)
console.log('The Tree Has Met Its End :sad:')
console.log('-------This is PearTree---------')
do {
 pearTree.grow();
 pearTree.produce();
 pearTree.harvest();
 console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree._statusHealty !=  false)
console.log('The Tree Has Met Its End :sad:')
