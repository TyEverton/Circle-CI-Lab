const getGreeting = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

const add = function(num1, num2) {
  return num1 + num2
}

test('can add numbers', function() {
  expect(add(1, 5)).toEqual(6)
})