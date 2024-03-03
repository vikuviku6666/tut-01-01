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

const myObj = {
	name: 'Vinay',
};

const person = {
	alive: true,
	answer: 37,
	hobbies: ['Training', 'Sleep', 'coding'],
	beverage: {
		morning: 'Coffee',
		afternoon: 'GreenTea',
	},
	action: function () {
		return `Time for ${this.beverage.morning}`;
	},
	action2() {
		return `Time for afternoon ${this.beverage.afternoon}`;
	},
};

console.log(person.hasOwnProperty("alive"));

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


