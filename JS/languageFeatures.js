// An example of ES6 class syntax and ES5 equivalent
// https://medium.com/ecmascript-2015/es6-classes-and-inheritance-607804080906

class Vehicle {
	
	constructor (name, type) {
		this.name = name;
		this.type = type;
	}

	getName () {
		return this.name;
	}

	getType () {
		return this.type;
	}

}

let car = new Vehicle('Tesla', car);
console.log(car.getName()); // Tesla
console.log(car.getType()); // Car

// ES6 inheritance

class Vehicle {
	
	constructor (name, type) {
		this.name = name;
		this.type = type;
	}

	getName () {
		return this.name;
	}

	getType() {
		return this.type;
	}
}

class Car extends Vehicle {
	constructor (name) {
		this.name = name;
	}

	getName () {
		return 'It is a car: ' + super.getName();
	}
}

let car = new Car('Tesla');
console.log(car.getName()); // It is a car: Tesla
console.log(car.getType()); // car

// Super previously to achieve such functionality in javascript required the use of call and apply
// static methods (properties) are also inherited and could be called by super
class Vehicle {
	
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}

	getName () {
		return this.name;
	}

	getType() {
		return this.type;
	}

	static create (name, type) {
		return new Vehicle(name, type);
	}
}

let car = Vehicle.create('Tesla', 'car');

class Car {
	constructor (name) {
		this._name = name;
	}

	set name (name) {
		this._name = name;
	}

	get name (name) {
		return this._name;
	}
}

//let car = new Car

// Regarding static method

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static#Examples

class Triple {
	static triple(n) {
		if (n === undefined) {
			n = 1;
		}
		return n * 3;
	}
}

class BiggerTriple extends Triple {
	static triple(n) {
		return super.triple(n) * super.triple(n);
	}
}

console.log(Triple.triple()); 	// 3
console.log(Triple.triple(6));  // 18

let tp = new Triple();

console.log(BiggerTripple.triple(3)); // 81 (not affected by parent's instansitation)

console.log(tp.triple());
// 'tp.triple is not a function'

// Why using? 

// Saving memory or persist states


// Enhanced Object property shorthand

// computed names in object property definitions

let getKey = () => '123',
	obj = {
		foo: 'bar',
		['key_' + getKey()]: 123
	};

// Method property
