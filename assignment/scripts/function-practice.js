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
function helloName( name ) {
  return 'Jo';
}
// Remember to call the function to test
console.log('Hello,', helloName(), '!');


// 3. Function to add two numbers together & return the result
// return firstNumber + secondNumber;
function addNumbers( firstNumber, secondNumber ) {
  let answer = firstNumber + secondNumber;
  return answer;
}
console.log('This is the firstNumber plus the secondNumber:', addNumbers(1324324,25435432));

// 4. Function to multiply three numbers & return the result
function multiplyThree(numOne, numTwo, numThree ){
  let answer = numOne * numTwo * numThree;
  return answer;
}
console.log('This is the answer of 3 numbers multiplied:', multiplyThree(867, 530, 9));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){ // number greater than 0 and positive
    return true;
  } else if ( number === 0 ) { // number equal to 0
    return false;
  } else { // everything else
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

// delcare array
// return last item in array
// if array empty, return undefined

let fakeArray = []; // declare array

function getLast( array ) {
  if (fakeArray.length === 0) { // conditional
    return undefined;
  } // end array empty
  else {
    return fakeArray[fakeArray.length -1]; // .length - 1 determines last element
  } // end of return last item
} // end of getLast

console.log('This array is:', getLast()); // logs outcome

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

let anotherArray = []; // declare array

function find( value, array ){
  if () { // conditional
    return true;
  } // end value found
  else {
    return false;
  } // end value not found
} // end find

console.log('The value of anotherArray is:', find());
/*
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
*/
