// Lexical Scope defines the scope of a variable in a function.

// Nested (child) functions have access to the scope of their parent functions

// This is often confused with closure, but lexical scope is only an important part of closure.

// global scope

// closure

// let x = 1;

// const parentFunction = () => {
//   // local scope

// }

// IIFE (Immediately Invoked Function Expression)
// const privateCounter = (() => {
//   let count = 0;
//   console.log(`Initial value: ${count}`);
//   // anonymous child function
//   return () => { count += 1;  console.log(count)}
// })();

// privateCounter();

// const credits = ((num) => {
//   let credits = num;
//   console.log(`initial credits value: ${credits}`);
//   return () => {
//     credits -= 1;
//     if (credits > 0) console.log(`credits remains ${credits}`);
//     if (credits <= 0) console.log('not enought credits');
//   }
// })(3);

// credits();
// credits();
// credits();
// credits();

// Object literal

// const person = {
//   alive: true
// }

// const musician = {
//   plays: true
// }

// musician.__proto__ = person;
// console.log('object :>> ', musician.plays);
// console.log('object :>> ', musician.alive);

// console.log(musician);

// const fibonacci = (num, array = [0, 1]) => {
//   while (num > 2) {
//     const [nextToLast, last] = array.slice(-2);
//     array.push(nextToLast + last);
//     num -= 1;
//   }
//   return array;
// }
// const fib = (num, array = [0, 1]) => {
//   if (num <= 2) return array;
//   const [nextToLast, last] = array.slice(-2);
//   return fib(num - 1, [...array, nextToLast + last]);
// }
// console.log(fib(10));

// currying can look like this:

// const buildSandwich = (ingredient1) => {
//   return (ingredient2) => {
//     return (ingredient3) => {
//       return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
//     }
//   }
// }

// const mySandwich = buildSandwich("Bacon")("Lettuce")("Tomato");
// console.log('mySandwich :>> ', mySandwich);

// const buildSandwichFormat = (ingredient1) => (ingredient2) => (ingredient3) =>
//   `${ingredient1}, ${ingredient2}, ${ingredient3}`;

//   console.log('buildSandwich() :>> ', buildSandwichFormat());

// undefined
// Number
// String
// Boolean
// BigInt
// Symbol

// Object, Array, Set, Map, WeakMap, WeakSet
// Function

// Primitives are immutable
//pure functions
// let x = 1;
// const increment = () => (x += 1);
// console.log(increment());
// console.log(x);

// const y = 'whatever_Vinay';
// 3;
// console.log(y);

// const add2 = (x) => x + 2;
// const substract1 = (x) => x - 1;
// const multiplyBy5 = (x) => x * 5;

// const result = multiplyBy5(substract1(add2(4)));
// console.log(result);
// // reads the function from right to left
// const compose =
// 	(...fns) =>
// 	(val) =>
// 		fns.reduceRight((prev, fn) => fn(prev), val);
// // reads the function from left to right
// const pipe =
// 	(...fns) =>
// 	(val) =>
// 		fns.reduce((prev, fn) => fn(prev), val);

// const compResult = compose(multiplyBy5, substract1, add2)(4);
// console.log(compResult);

// const apples = ['nice_apple', 'better_apple', 'red_apple'];
// const apples1 = {};

// console.log(apples1.length ?? 'Not an array');
// console.log(Array.isArray(apples1));

// const myArray = [{ id: 1 }];

// console.log(Array.isArray(myArray) && myArray.length ? true : false);
// console.log(Array.isArray(myArray) && myArray[0]?.id ? true : false);
// console.log(Array.isArray(myArray) && myArray[0]?.name ? true : false);

///Debounce
// const initApp = () =>
// {
//   const button = document.querySelector('button');
//   button.addEventListener('click', debounce(clickLog, 2000));

// }

// const clickLog = () => console.log("clicked");
// document.addEventListener('DOMContentLoaded', initApp);

// const debounce = (fn, delay) =>
// {
//   let id;
//   console.log(`id at immediate load: ${id}`);
//   return (...args) =>
//   {
//     console.log(`previous id: ${id}`);
//     if (id) clearTimeout(id);
//     id = setTimeout(() => {
//       fn(...args);
//     }, delay);
//   }
// }

// Throttle

// const initApp = () => {
// 	const button = document.querySelector('button');
// 	button.addEventListener('click', clickLog);
// };

// const clickLog = () => console.log('clicked');
// document.addEventListener('DOMContentLoaded', initApp);
// console.log(new Date().getTime());

// functions do one thing
//objects

// const myObj = {
// 	name: 'Vinay',
// };

// const person = {
// 	alive: true,
// 	answer: 37,
// 	hobbies: ['Training', 'Sleep', 'coding'],
// 	beverage: {
// 		morning: 'Coffee',
// 		afternoon: 'GreenTea',
// 	},
// 	action: function () {
// 		return `Time for ${this.beverage.morning}`;
// 	},
// 	action2() {
// 		return `Time for afternoon ${this.beverage.afternoon}`;
// 	},
// };

// console.log(person.hasOwnProperty('alive'));

// console.log(myObj.name);
// console.log(anotherObj.hobbies);
// console.log(anotherObj.beverage.afternoon);
// anotherObj['firstName'] = 'Vinay';
// console.log(anotherObj['beverage']);
// console.log(anotherObj.action());
// console.log(anotherObj.action2());
// console.log(anotherObj.action2());
// console.log(anotherObj["beverage"]["afternoon"]);
// dot notation and bracket notation

// const vinay = Object.create(person);
// console.log(vinay.hobbies);
// vinay.thoughts = "I am learning JavaScript";
// console.log(vinay);
// console.log(vinay.action2());
// console.log(vinay);

// Fetch API requires a discussion of
// Callbacks, Promises, Thenables, and Async/Await
// Promises
// 3 states: Pending, Fulfilled, Rejected

// const promise = new Promise((resolve, reject) => {
// 	let error = false;
// 	if (!error) {
// 		resolve('Yes! resolved promise');
// 	} else {
// 		reject('No! rejected promise');
// 	}
// });
// console.log(promise);

// promise
// 	.then((value) => value + 1)
// 	.then((newValue) => console.log(`Promise is ${newValue}`))
// 	.catch((error) => console.log(error)).finally((value) => console.log("Value hum"));

// const myNextPromise = new Promise((resolve, reject) => {
// 	setTimeout(() => resolve('myNextPromise Resolved!'), 3000);
// });

// myNextPromise.then(value => console.log(value));
// promise.then(value => console.log(value));

// const users = fetch('https://jsonplaceholder.typicode.com/users')
// 	.then((response) => response.json())
// 	.then((data) => {
// 		data.forEach((user) => {
// 			console.log(user);
// 		});
// 	}).catch((error) => console.log(error));

// console.log(users);

// Async / Await

// const myCoolFunc = async () => {
// 	const response = await fetch('https://jsonplaceholder.typicode.com/users');
// 	const jsonUserData = await response.json();
// 	console.log(jsonUserData.map((user) => user.email));
// };
// myCoolFunc();

// JavaScript is High-Level, Garbage-collected, interpreted or just-in-time complied,
// multi-paradigm, prototype-based object oriented, First-class function, Dynamic, single-threaded, non-blocking event loop
// const hi = "hi too";
// const scope = () => {
// 	if (hi === "") {
// 		const vin = "vin";
// 		console.log(vin);
// 	}
// 	const bin = "easy";
// 	console.log(bin);
// 	console.log(hi);
// }

// scope();
// function hiToo() {
// 	const myName = 'Jonas';
// 	const job2 = "Developer";
	
// 	if (myName === 'Jonas') {
// 		console.log(job2);
// 	}
// 	console.log(this);
// }

// hiToo();
// console.log("Hello Vinay Learning OOP in Javascript");

// const calc = () => {
// 	return 4 * 4;
// }

// const printCalc = (callback) => {
// 	console.log(callback());
// }
// printCalc(calc);

/**
 * Creates a new Car
 * @property {Number} doors - Number of Car Doors
 * @property {String} engine - Car Engine Modal
 * @property {String} color - Car Color
 * @property {string} luxury - Car Luxury type
 * @method addLuxury {Function} - Add Luxury type
 * @method getLuxury {Function} - Get Luxury
 */
export class Car {
	doors;
	engine;
	color;
	#luxury;
	constructor(doors, engine, color) {
		this.doors = doors;
		this.engine = engine;
		this.color = color;
	}

	addLuxury(lux) {
		this.#luxury = lux;
	}

	getLuxury() {
		return this.#luxury;
	}
}

class elCar extends Car {
	constructor(doors, engine, color, wheels=4) {
		super(doors, engine, color);
		this.wheels = wheels;
	}
}


const greenCar = new Car(4, "ultra", "green");
const cx5 = new elCar(4, "Enviro-friendly", "cyan", 8);
cx5.addLuxury("Leather");
console.log("Luxury:======<>", cx5.getLuxury());
const cx4 = new elCar(4, "Enviro-friendly", "cyan");


console.log(greenCar);
console.log(cx5);
console.log(cx4);

