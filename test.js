const getGreeting = require('./project');

const { expect, test, describe } = require('@jest/globals')

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

const add = function(num1, num2) {
  return num1 + num2
}

const multiply = function(num1, num2) {
  return num1 * num2
}

describe('math functions', function() {
  test('can add numbers', function() {
    expect(add(1, 5)).toEqual(6)
  })
  test('can multiply numbers', function() {
    expect(multiply(1, 5)).toEqual(5)
  })
})

