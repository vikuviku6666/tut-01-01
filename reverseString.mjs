function reverseString(word) {
  return word.split('').reverse().join('').replaceAll(',', '');
}

export default reverseString;