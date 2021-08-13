console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

/* Submitted for assignment
function helloName( name ) {
  return 'Marlanval'; // stores string value
} // end helloName

// Remember to call the function to test
console.log(`Hello, ${helloName()}!`);
*/

function helloName( name ) {
  // return 'Marlanval'; // this is not reusable because it will always return Marlanval
  return `Hello, ${name}`; //this returns any name passed thru the function
} // end helloName

console.log(`testing helloName: ${helloName('Marlanval')}!`); // tests helloName with Marlanval
console.log(`testing helloName: ${helloName(123)}!`); // tests helloName with 123

// 3. Function to add two numbers together & return the result
// return firstNumber + secondNumber;
function addNumbers( firstNumber, secondNumber ) {
  let answer = firstNumber + secondNumber; // stores value of two variables added
  return answer.toLocaleString("en-US"); // method that formats number with commas specified in language and region. if argument is not included it defaults to local settings?
} // end addNumbers

console.log(`The firstNumber plus the secondNumber is: ${addNumbers(1324324, 25435432)}`);

// 4. Function to multiply three numbers & return the result
function multiplyThree( numOne, numTwo, numThree ) {
  let answer = numOne * numTwo * numThree;
  return answer.toLocaleString(); // method that formats number with commas based on default settings since parameters are not specified.
}

console.log(`This is three numbers multiplied: ${multiplyThree(867, 530, 09)}`);

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number >= 0 ) { // number greater and equal to 0
      return true;
    }
    else { // everything else including negative numbers
      return false;
    }
  }

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log(`isPositive - should say true: ${isPositive(3)}`);
console.log(`isPositive - should say true: ${isPositive(0)}`);
console.log(`isPositive - should say false: ${isPositive(-3)}`);

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

/* Submitted for assignment
let silly = ['string', 'juice', 'putty', 'goose']; // test 1
// let silly = []; // test 2

function getLast( array ) {
  let lastItem = silly.pop(); // stores last element value of silly in lastItem variable
    return lastItem;
  if (silly.length === 0) { // checks silly to see if it's empty
    return 'undefined';
  }
}

console.log(`Something silly or undefined if it's empty: ${getLast()}`);
*/

let silly = ['string', 'juice', 'putty', 'goose']; // test 1
// let silly = []; // test 2

function getLast( array ) {
  // let lastItem = silly.pop(); // stores last element value of silly in lastItem variable <-- this is not reusable.
  let lastItem = array.pop(); // stores last element value of any array called in lastItem variable. in this case, the array will be silly

    return lastItem;
  // if (silly.length === 0) { // checks silly to see if it's empty <-- again, not reusable and specific to silly array
  if (array.length === 0) { // checks array passed to see if it's empty. in this case it's silly
    return 'undefined';
  }
}

// console.log(`Something silly or undefined if it's empty: ${getLast()}`); can not test for any array. since silly array is built into function, it will only output that stuff
console.log(`Something silly or undefined if it's empty: ${getLast(silly)}`); // tests getLast with silly array called

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

/* Submitted for assignment
let toyBox = ['legos', 'slinky', 'ball', 'slinky'];
let extraToy = []; // starting to work on logic for duplicate value...to be continued

function find( value, array ) {
  for (let i=0; i < toyBox.length; i++) // loops thru entire array
    if (value === toyBox[i]) { // checks if value and array elements are equal
      return true;
    } return false;
}

console.log(`The toy was found: ${find('slinky', toyBox)}`);
console.log(`The toy was found: ${find('logs', toyBox)}`);
*/

let toyBox = ['legos', 'slinky', 'ball', 'slinky'];
let extraToy = []; // starting to work on logic for duplicate value...to be continued

function find( value, array ) { // added curly braces
  for (let i=0; i < array.length; i++) { // loops thru entire array that is passed thru. in this case toyBox
    if (value === array[i]) { // checks if passed thru value and array elements are equal. in this case toyBox
      return true;
  }
    } return false;
}

console.log(`The toy was found: ${find('slinky', toyBox)}`); // tests for toy in toyBox
console.log(`The toy was found: ${find('logs', toyBox)}`); // tests for toy not in toyBox

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  return letter.charAt(0) === string.charAt(0); // charAt is a method that returns string of specified index
}

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let beverlyHills = [9, 0, 2, 1, 0]; // sample array 1
// let beverlyHills = []; // sample array 2

function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  for (let i=0; i<beverlyHills.length; i += 1) { // i starts at 0. while i is less than length of array, run code in {}. then increment i by 1
    sum += beverlyHills[i]; // can also be written sum = sum + beverlyHills[i]
  }
  return sum;
}

console.log(`The sum of this array is: ${sumAll()}`); // sample array 1 outputs 12. sample array 2 outputs 0

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let bobMarray = [3, 1, 4, 1, 5, 9, -66]; // test 1
// let bobMarray = [-3, 0, 'a', '@', 2 ]; // test 2
// let bobMarray = []; // test 3

function bePositive() {
  let allPositive = []; // empty array to collect positive numbers
  for (let i=0; i<bobMarray.length; i+=1) { // for loop that starts at the beginning of the array and works thru to the end while running code in {} after each element
    if (bobMarray[i] > 0) {
        allPositive.push(bobMarray[i]); // puts positive number in bobMarray
    }
  }
  return allPositive;
}

console.log(`bobMarray has these positive numbers: ${bePositive(bobMarray)}`);
// console.log(bobMarray); // checks to see if input array has not changed

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// SOURCE: https://edabit.com/challenge/4gzDuDkompAqujpRi

function addingUp(num) {
  let sum = 0;
  for (let i=0; i<=num; i++) { // makes sure you're adding all the numbers starting from 0 up to and including num
    sum += i;
  }
  return sum;
}

console.log(`addingUp 2 should be 3: ${addingUp(2)}`);
console.log(`addingUp 22 should be 253: ${addingUp(22)}`);
