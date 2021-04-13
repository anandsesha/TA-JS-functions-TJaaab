// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString1 = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString2 = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString3 = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(number){
  return number + 1;
}
// - Write a Function Expression
let addOneExp = function (number){
  return number + 1;
};
// - Write an Arrow Function without curly brackets(if possible)
let addOneExpImpArrow = (number) => number + 1;
// - Write an Arrow Function with curly brackets
let addOneExpArrow = (number) => {
  return number + 1;
};
// - Execute the function
addOne(10);
// - Execute the function and store the return value in a variable.
let resultAddOne = addOne(10);
// - What is the typeof returnValue
//typeof returnValue is "number"



/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function subtractOne(number){
  return number - 1;
}
// - Write a Function Expression
let subtractOneExp = function (number){
  return number - 1;
};
// - Write an Arrow Function without curly brackets(if possible)
let subtArrowImp = (number) => number - 1;
// - Write an Arrow Function with curly brackets
let subtArrow = (number) => {
  return number - 1
};
// - Execute the function
subtractOne(10);
// - Execute the function and store the return value in a variable.
let resultSubt = subtractOne(12);
// - What is the typeof returnValue
//typeof resultSubt is "number"




/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(numA,numB){
  return numA + numB;
}
// - Write a Function Expression
let sumExp = function (numA,numB){
  return numA + numB;
};
// - Write an Arrow Function without curly brackets(if possible)
let sumArrowImpReturn = (numA,numB) => numA + numB;
// - Write an Arrow Function with curly brackets
let sumArrow = (numA,numB) => {
  return numA + numB;
};
// - Execute the function
sum(12,10);
// - Execute the function and store the return value in a variable
let resultSumTwo = sum(12,10);
// - What is the typeof returnValue
//typeof return value is "number"




/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(num){
  return num * num;
}
// - Write a Function Expression
let squareExp = function (num){
  return num * num;
};
// - Write an Arrow Function without curly brackets(if possible)
let squareArrowImpReturn = (num) => num * num;
// - Write an Arrow Function with curly brackets
let squareArrow = (num) => {
  return num * num
};
// - Execute the function
square(5);
// - Execute the function and store the return value in a variable
let resultSquare = square(5); 
// - What is the typeof returnValue
//typeof return value here is a "number"




/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x,y){
  if(x>y){
    return true;
  }else{
    return false;
  }
}
// - Write a Function Expression
let isGreaterExp = function(x,y){
  if(x>y){
    return true;
  }else{
    return false;
  }
};
// - Write an Arrow Function without curly brackets(if possible)
let isGreaterArrowImp = (x,y) => x > y ? true : false; 
// - Write an Arrow Function with curly brackets
let isGreaterArrow = (x,y) => {
  if(x>y){
    return true;
  }else{
    return false;
  }
};
// - Execute the function
isGreater(10,8);
// - Execute the function and store the return value in a variable
let resultIsGreater = isGreater(10,15);
// - What is the typeof returnValue
// the typeof this return value is "boolean"




/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(number){
  if(number%2==0){
    return `Number is even`;
  }else{
    return `Number is odd`;
  }
}
// - Write an anonymous Function Expression
let oddOrEvenAnonymousExp = function(number){
  if(number%2==0){
    return `Number is even`;
  }else{
    return `Number is odd`;
  }
};
// - Write an named Function Expression
let namedExp = function oddOrEvenNamedFunctionExp(number){
  if(number%2==0){
    return `Number is even`;
  }else{
    return `Number is odd`;
  }
};
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEvenImpArrow = (number) => number%2==0 ? alert(`Number is even`) : alert(`Number is odd`);
// - Write an Arrow Function with curly brackets
let oddOrEvenArrow = (number) => {
  if(number%2==0){
    return `Number is even`;
  }else{
    return `Number is odd`;
  }
};
// - Execute the function
oddOrEven(10);
// - Execute the function and store the return value in a variable
let resultOddOrEven = oddOrEven(11);
// - What is the typeof returnValue
//typeof this return value is "string"