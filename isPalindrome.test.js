const isPalindrome = require('./isPalindrome');

test('Tacocat returen true', () => {
  expect(isPalindrome("Tacocat")).toBe(true)
})
test('Tacocat returen true', () => {
  expect(isPalindrome("Dave")).toBe(false)
})
test('Tacocat returen true', () => {
  expect(isPalindrome("Ambika")).toBe(false)
})