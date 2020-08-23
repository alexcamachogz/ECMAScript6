// ----------- Class 001
// Before ECMAScript 6 -> Default Params
function newFunction(name, age, country) {
	var name = name || 'Alex';
	var age = age || 26;
	var country = country || 'MX'
	console.log(name, age, country);
}
// ES6 -> Default Params
function newFunction2(name = 'Alex', age = 26, country = 'MX') {
	console.log(name, age, country);
}

// With default Params
newFunction2();
// Specifying parameters
newFunction2('Mariana', 24, 'JA');

// Template literals
let hello = 'Hello';
let world = 'World';
// Before ES6 -> Concatenation
let epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase);
// ES6 -> Concatenation
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

// ----------- Class 002
// Before ES6 -> Multiline
let lorem = 'Lorem ipsum dolor sit amet. \n' + 'Praesentium, nesciunt!';
// ES -> Multiline
let lorem2 = `Lorem ipsum dolor sit amet.
Praesentium, nesciunt!`

console.log(lorem);
console.log(lorem2);

// Elements Destructuring
let person = {
	'name': 'Alex',
	'age': 32,
	'country': 'MX'
}
// Before ES6
console.log(person.name, person.age, person.country);
// ES6
let { name, age, country } = person;
console.log(name, age, country);

// Spread Operator
let team1 = ['Alex', 'Oscar', 'Manuel'];
let team2 = ['Valeria', 'Mariana', 'Camila'];
// ES6
let education = ['David', ...team1, ...team2];
console.log(education);

// Let
// Before ES6 -> Global Scope, deprecate
var hello = 'Hello';
{
	var globalVar = "Global Var";
}
{
	// ES6 -> Local Scope
	let globalLet = 'Global Let';
	console.log(globalLet);
}
console.log(globalVar);

// Const
// ES6 -> Const, cannot be reassigned
const HELLO = 'Hello World!';

// ----------- Class 003
// Object
let name = 'Alex';
let age = 26;

// Before ES6 -> Create object
obj = { name: name, age: age };
// ES6
obj2 = { name, age };
console.log(obj2);

// Arrow function
const NAMES = [
	{name: 'Alex', age: 26},
	{name: 'Matty', age: 24}
]
// Before ES6
let listOfNames = NAMES.map(function(item) {
	console.log(item.name);
});
// ES6
let listOfName2 = NAMES.map( (item) => {
	console.log(item.age);
});

// Promises
const helloPromise = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			resolve('Hey!');
		} else {
			reject('Ups!!');
		}
	});
}

helloPromise()
	.then(response => {
		console.log(response);
	})
	.catch(error => {
		console.log(error);
	});

// ----------- Class 004
// Class
class calculator {
	constructor() {
		this.valueA = 0;
		this.valueB = 0;
	}

	add(valueA, valueB) {
		this.valueA = valueA;
		this.valueB	= valueB;
		return this.valueA + this.valueB;
	}
}

const calc = new calculator();
console.log(calc.add(2,2));;

// Module
import { hello } from './module';
hello();

// Generator
function* helloWorld() {
	if (true) {
		yield 'Hello, ';
	}
	if (true) {
		yield 'World';
	}
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);