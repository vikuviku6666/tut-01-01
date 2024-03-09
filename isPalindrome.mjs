import { Car } from './index.mjs';
import reverseString from './reverseString.mjs';
//const reverseString = require('./reverseString')

export default function isPalindrome(word) {
	const car = new Car(5, 'tiger', 'gingilala');
	console.log(car);
	return word.toLowerCase() === reverseString(word).toLowerCase();
}
//module.exports = isPalindrome
