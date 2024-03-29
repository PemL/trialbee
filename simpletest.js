'use strict'

//***********************************************************************
// Trialbee Simplified Javascript Programming Test
// Copyright (c) 2017 Trialbee AB, All Rights Reserved
//***********************************************************************

// Instructions:
// This programming test contains 9 tasks
// Some tasks require you to fix errors in the code,
// while others require you to create an algorithm or construct based on
// the instructions.
// Some tasks require you to answer a question textually. Please do so by
// adding your response as comments (// or /*)
// Please note that you are not expected to ace all tasks, rather to show
// that you know the basics of Javascript. Any task from 9 and above are considered bonus
// and are also an indication of what to expect from your carreer as a Javascript developer.
// Good luck and have fun! :)


//******************************************
// 1. Correct the code so that it outputs 10
//******************************************

var multiply = function mult(a,b) {
  return a*b;
}

var result = multiply(5,2)
console.log('multiply(2,5) =', result) //should be 10

//******************************************
// 2. Explain the differences
// Why is one comparation true and the other false?
//******************************************

var str42 = '42'
var num42 = 42

console.log('str42 == num42  :', str42 == num42)   //true
console.log('str42 === num42 :', str42 === num42)  //false
// Please explain here:

// Two equal signs check for values whereas three also check the type. Since str42 is of type string and num42 of type integer, three equal signs wil //return false.

//******************************************
// 3. Type coercion
// Explain why the resulting type is what it is
//******************************************

var numString = 42 + '42' //what is the result and why?
console.log('numString is of type', typeof(numString), numString)
// Please explain here:

//It becomes a string, with value '4242'. If one variable is a string javascript will concatenate. On the other hand, if both were integers, the result //would be the sum of the numbers. 

//******************************************
// 4. Create a function 'logger(x)' that logs
// its argument 'x' to the console
//******************************************

function logger(x) {
  console.log(x);
}

//******************************************
// 5. Create a function 'looper(arr)' that loops over an array
// The function takes an array as argument
// and loops over each element and prints its value
// to the console
//******************************************

var arr = [24,43,44,42]

for (let i = 0; i < arr.length; i += 1) { 
  console.log(arr[i]);
}

//******************************************
// 6. Create a callback function that prints
// its argument to the console
//******************************************

var callback = (date) => console.log(date);

var libraryFunction = function(callback) {
  if (typeof callback === 'function') {
    callback(new Date())
  } else {
    console.log('callback is undefined')
  }
}

libraryFunction(callback)

//******************************************
// 7. Write a function 'upper(str)' that takes an input
// argument, checks that it is a string,
// converts it to upper case and returns it
// Print the result to the console
// If the argument is not a string the function
// should return 'invalid input'
//******************************************

function upper(str) {
  return str.toUpperCase();
}

console.log(upper('hey')) //should output 'HEY'

//******************************************
// 8. Complete the function with a switch-case statement
// that makes the function return:
// 'too big' for 'val' = 3
// 'just right' for 'val' = 2
// 'too small' for 'val' = 1
// 'invalid input' for any other value
//******************************************

function compare(val) {
  switch (val) {
  case 3:
    return 'too big';
  case 2:
    return 'just right'; 
  case 1:
    return 'too small';
  default:
    return 'invalid input';
  }
}

console.log(compare(3)) //should output 'too big'
console.log(compare(2)) //should output 'just right'
console.log(compare(1)) //should output 'too small'
console.log(compare(42)) //should output 'invalid output'

// -------------------- Advanced --------------------


//******************************************
// X. Write an algorithm that returns all
// sentences that contain the string 'apple'
// into a new array
// Output the array to the console
//******************************************

var items = [
  'oranges are juicy',
  'some computers are made by apple',
  'coffee and apple juice',
  'pineapples are spiky'
]

var filtered = (() => {
  return items.filter(sentence => sentence.includes('apple'));
})();

console.log(filtered);

//******************************************
// 5. Write an algorithm that converts
// an array of values into a single value
// [2,3,4,5,6,19] should result in 13680
// by multiplying each (computed) value with the previous one.
// 1*2*3*4*5... = 13680
// Assume that the first value is multiplied by 1
// Note: You cannot use 'for' or 'while' loops
//******************************************

var values = [2,3,4,5,6,19]

var result = values.reduce((acc, val) => acc * val);

console.log(result + ' should equal 13680');

//******************************************
// 6. Make the car run at speed 42
// Create a constructor function
// Add a "drive()" function to the prototype
// that logs 'running at speed' <speed> to the console when called
//******************************************
// implement constructor function that sets the speed to 42
// create new car object

function car() {
  this.speed = 42;
  this.drive = () => `running at speed: ${this.speed}`;
}

var car = new car();

//car.drive() //should ouput 'running at speed: 42'

//******************************************
// 7. What's up with "this"
// Explain why the standard function and the
// arrow function differ in behavior
//******************************************

var stdFunction = function() {
  return this.value
}

var arrowFunction = () => {
  return this.value
}

var o = {
  value: 42
}

console.log('stdFunction', stdFunction.call(o))
console.log('arrowFunction', arrowFunction.call(o))  //Why is this 'undefined'?

// Because 'this' is not bound in arrow functions. Instead, 'this' in an arrow function refers to its enclosing object. In this case, window.


//******************************************
// 8. Create an object (called "counter") with a private variable
// The object should have three functions; increment(), decrement() and getValue()
// You should be able to call increment() to increase the value by one
// You should be able to call decrement() to decrease the value by one
// The snippet should output the value of 'counter.getValue()'
// Note: the private variable must not be accessible from the outside
// Hint: Use an IIFE to create an instance of the object
//******************************************

var counter = ((value) => {
  var _value = value;

  var increment = () => {
    _value += 1;
  }
  
  var decrement = () => {
    _value -= 1;
  }  

  var getValue = () => {
    return _value;
  }

  return {
    increment,
    decrement,
    getValue,
  };
})(0);

counter.increment() //increment by one
counter.increment() //increment by one
counter.decrement() //increment by one
console.log('counter.getValue() should be 1. Output is', counter.getValue())

//******************************************
// 9. make the function 'f' work as intended,
// ie make it output 'val is 43' rather than
// throwing an exception
//******************************************

var ff = function () {
  console.log('val is', this.val)
}

var o = {
  val: 43,
  f: function(ff) {
    ff.call(this)
  }
}

o.f(ff)
