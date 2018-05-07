"use strict"

class FruitTree {
  constructor(treeProperties) {
    this._age = 0
    this._height = 0
    this._fruits = 0
    this._healthStatus = 'Alive'
    this._harvested = 0
    this._growth = treeProperties.growth
    this._stopGrowing = treeProperties.stopGrowing
    this._matureAge = treeProperties.matureAge
    this._deadAge = treeProperties.deadAge
    this._AvgFruitsHarvested = treeProperties.AvgFruitsHarvested
  }


  get growth(){
    return this._growth
  }

  get stopGrowing(){
    return this._stopGrowing
  }

  get matureAge(){
    return this._matureAge
  }

  get deadAge(){
    return this._deadAge
  }

  get AvgFruitsHarvested(){
    return this._AvgFruitsHarvested
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

  get healthStatus() {
    return this._healthStatus
  }

  get harvested() {
    return this._harvested

  }

  set age(age){
    this._age = age
  }

  set height(height) {
    this._height = height

  }

  set fruits(fruits) {
    this._fruits = fruits
  }

  set healthStatus(healthStatus) {
    this._healthStatus = healthStatus
  }

  set harvested(harvested) {
    this._harvested = harvested

  }
  
  set growth(growth){
    this._growth = growth
  }

  set stopGrowing(stopGrowing){
    this._stopGrowing = stopGrowing
  }

  set matureAge(matureAge){
    this._matureAge = matureAge
  }

  set deadAge(deadAge){
    this._deadAge = deadAge
  }

  set AvgFruitsHarvested(AvgFruitsHarvested){
    this._AvgFruitsHarvested = AvgFruitsHarvested
  }
  
  // Get current states here
  // Grow the tree
  grow() {
    this.age++
    if(this.age<this.stopGrowing) this.height += (parseInt(Math.random()*10)/10)+this.growth
    if(this.age>=this.matureAge) this.produceMangoes()
    if(this.age==this.deadAge) this.healthStatus = 'dead'
  }

  // Produce some mangoes
  produceMangoes() {
    this.fruits = parseInt(Math.random()*this.AvgFruitsHarvested)
  }

  // Get some fruits
  harvest() {
    this.harvested += this.fruits
    let goodfruits = parseInt(Math.random()*this.fruits)
    return `Fruits Harvested: ${this.fruits} (${goodfruits} good, ${this.fruits - goodfruits} bad)`
  }
}
//tinggi+,umur grow, umur berbuah, umur mati, jenis buah
class MangoTree extends FruitTree {
  // Initialize a new MangoTree
  constructor(treeProperties){
    super(treeProperties)
    this._treeName = 'Mango Tree'
  }
  get treeName(){
    return this._treeName
  }

  startGrowing(){
    console.log("\n\nYEY! it's "+this.healthStatus)
    while(this.healthStatus === 'Alive'){
      this.grow();
      this.harvest();
      console.log(`[Year ${this.age} Report] Tree Name: ${this.treeName} | Height = ${this.height.toFixed(1)} | Fruits harvested = ${this.harvested}|| ${this.harvest()}`)
    }
    console.log('your tree is dead :(')
  }
}
class AppleTree extends FruitTree {
  constructor(treeProperties){
    super(treeProperties)
    this._treeName = 'Apple Tree'
  }

  get treeName(){
    return this._treeName
  }

  startGrowing(){
    console.log("\n\nYEY! it's "+this.healthStatus)
    while(this.healthStatus === 'Alive'){
      this.grow();
      this.harvest();
      console.log(`[Year ${this.age} Report] Tree Name: ${this.treeName} | Height = ${this.height.toFixed(1)} | Fruits harvested = ${this.harvested}|| ${this.harvest()}`)
    }
    console.log('your tree is dead :(')
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
//  this.growth = treeProperties.growth
//  this.stopGrowing = treeProperties.stopGrowing
//  this.matureAge = treeProperties.matureAge
//  this.deadAge = treeProperties.deadAge
  let mangoTree = new MangoTree({
    growth:0.1,
    matureAge:5,
    deadAge:15,
    stopGrowing:4,
    AvgFruitsHarvested: 20,
  })
  let appleTree = new AppleTree({
    growth:2,
    matureAge:3,
    deadAge:12,
    stopGrowing:6,
    AvgFruitsHarvested: 50,
  })

  mangoTree.startGrowing()
  appleTree.startGrowing()