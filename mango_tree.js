"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor(age, height,) {
    this._age = age;
    this._height = height;
    this._produced = [];
    this._harvested = 0;
    this._healtyStatus = true;
    this._maxAge = 20;
    this._goodCount = 0;
    this._badCount = 0;
  }

  get age() {
    return this._age;
  }

  get height() {

    return ((Math.round((this._height/100) * 10)/ 10) + "m");
  }

  get fruits() {
    return this._max;
  }

  get healthyStatus() {
    return this._healthyStatus;
  }

  get harvested() {
    return this._harvested + " (" + this._goodCount + " good, " + this._badCount + " bad)";
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age += 1;

    if(this._age <= 15){
      var ran = Math.floor(Math.random() * 60 + 1);
      this._height += ran;
    }
    if(this._age >= this._maxAge){
      this._healthyStatus = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    this._badCount = 0;
    this._goodCount = 0;
    if(this._age > 2){
      var ran = Math.floor(Math.random() * 20 + 1);
      for(let i=0; i<ran; i++) {
        let mango = new Mango()
        this._produced.push(mango);
      }
    }

  }

  // Get some fruits
  harvest() {

    this._harvested = this._produced.length
    for(let i = 0; i < this._harvested; i++){
      if(this._produced[i].quality === "bad"){
        this._badCount++;
      }
      else if(this._produced[i].quality === "good"){
        this._goodCount++;
      }
    }
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.quality()
  }

  quality(){
    var arr = ["good", "bad"];
    var ran = Math.floor(Math.random() * arr.length);

    return arr[ran];
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

let mangoTree = new MangoTree(0, 0)
  console.log("The tree is alive! :smile:")
  do {
   mangoTree.grow();
   mangoTree.produceMangoes();
   mangoTree.harvest();
   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
 } while (mangoTree.healthyStatus != false)
 console.log("The tree has met its end. :sad:")

// Release 1
class AppleTree {
  constructor(age, height,) {
    this._age = age;
    this._height = height;
    this._produced = [];
    this._harvested = 0;
    this._healtyStatus = true;
    this._maxAge = 30;
    this._goodCount = 0;
    this._badCount = 0;
  }

  get age() {
    return this._age;
  }

  get height() {

    return ((Math.round((this._height/100) * 10)/ 10) + "m");
  }

  get fruits() {
    return this._max;
  }

  get healthyStatus() {
    return this._healthyStatus;
  }

  get harvested() {
    return this._harvested + " (" + this._goodCount + " good, " + this._badCount + " bad)";
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age += 1;

    if(this._age <= 25){
      var ran = Math.floor(Math.random() * 150 + 1);
      this._height += ran;
    }
    if(this._age >= this._maxAge){
      this._healthyStatus = false;
    }
  }

  // Produce some apples
  produceApples() {
    this._badCount = 0;
    this._goodCount = 0;
    if(this._age > 1){
      var ran = Math.floor(Math.random() * 30 + 1);
      for(let i=0; i<ran; i++) {
        let apple = new Apple()
        this._produced.push(apple);
      }
    }

  }

  // Get some fruits
  harvest() {

    this._harvested = this._produced.length
    for(let i = 0; i < this._harvested; i++){
      if(this._produced[i].quality === "bad"){
        this._badCount++;
      }
      else if(this._produced[i].quality === "good"){
        this._goodCount++;
      }
    }
  }

}
class Apple {
  // Produce an apple
  constructor() {
    this.quality = this.quality()
  }

  quality(){
    var arr = ["good", "bad"];
    var ran = Math.floor(Math.random() * arr.length);

    return arr[ran];
  }
}
let appleTree = new AppleTree(0, 0)
  console.log("The tree is alive! :smile:")
  do {
   appleTree.grow();
   appleTree.produceApples();
   appleTree.harvest();
   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
 } while (appleTree.healthyStatus != false)
 console.log("The tree has met its end. :sad:")


// // Release 2
// class FruitTree {}
// class Fruit {}
