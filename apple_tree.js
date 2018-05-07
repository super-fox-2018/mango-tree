let FruitTree = require('./fruit_tree.js')
// let parent = FruitTree

class AppleTree extends FruitTree{
	constructor(name,maxAge,maxHeight,startProduce){
	super(name,maxAge,maxHeight,startProduce)
	this._name = name
	this._maxAge = maxAge
	this._maxHeight = maxHeight
	this._startProduce = startProduce
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

  get healtyStatus() {
  	return this._healthy
  }

  get harvested() {
  	let result = `${this._fruits.length} (${this._fruitsGood} good, ${this._fruitsBad} bad`
  	return result
  }


  // Get current states here

  // Grow the tree
  grow() {
  	this._age++
  	if (this.height<this._maxHeight) {
  		this._height+= Math.floor(Math.random()*5)
  	}if (this.age===this._maxAge) {
  		this._healthy = false
  	}
  }

  // Produce some mangoes
  produceMangoes() {
  	if (this.age<this._startProduce) {
  		return 0
  	}
  	return Math.floor(Math.random()*25)
  }

  // Get some fruits
  harvest() {
  	let bucket = []
  	let appleClass = new Apple()
  	for(var i=0;i<this.produceMangoes();i++){
  		//if (i>=this._startProduce) {
  			bucket.push(Math.floor(Math.random()*2))
  		//}
  		// else{
  		// 	bucket.push(' ')
  		// }
  	}
  	appleClass.bucketApple = []
  	for(var i=0;i<bucket.length;i++){
  		if (bucket[i]===1) {
  			appleClass.bucketApple.push('Good')
  		}
  		else if (bucket[i]===0) {
  			appleClass.bucketApple.push('Bad')
  		}
  		else{
  			appleClass.bucketApple.push('')
  		}
  	}
  	appleClass.assignQuality()
  	this._
  	this._fruits = appleClass.bucketApple
  	this._fruitsGood = appleClass._good
  	this._fruitsBad = appleClass._bad
  	return this._fruits
  }

}
class Apple {
	constructor(){
		this.bucketApple = []
		this._bad = 0
		this._good = 0
	}
	assignQuality(){
		let temp = this.bucketApple
		 for(var i=0;i<temp.length;i++){
		 	if (temp[i]==='Good') {
		 		this._good++
		 	}
		 	else if (temp[i]==='Bad') {
		 		this._bad++
		 	}
		 }
	}
}

let apple = new AppleTree('Apple',25,15,5)
let temp = new Apple()
   do {
     apple.grow();
     apple.produceMangoes();
     apple.harvest();
     //console.log(apple.harvest())
     console.log(`[Year ${apple.age} Report] Height = ${apple.height} m | Fruits harvested = ${apple.harvested} `)
   	 //console.log(temp)
     //console.log(tree)
     //console.log(mango)
   } while (apple._healthy != false)
   console.log('Tree is dead')

console.log(temp)


//console.log(apple)