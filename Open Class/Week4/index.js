// ============================================================================================
// Arrow function Video example

// let createFullName = (firstName, lastName) => firstName + ' ' + lastName;
// let createFullName = (firstName, lastName) => `${firstName} ${lastName}`;
// console.log(createFullName('Tom', 'Sawyer'));

// You can do it two ways {} needs the word return, without doesn't

// const lunchTime = (foodChoice, drinkChoice) => "a string"

// const lunchTime = (foodChoice, drinkChoice) => {
//     return "a string"
// }

// ********************************************************************************************
// ****************************     OPEN CLASS     ********************************************
// ****************************   Arrow Functions  ********************************************
// ********************************************************************************************

// let returnSum = (a, b) => a + b;
// console.log(returnSum(5,6));

// ============================================================================================

// let findSquareRoot = num => Math.sqrt(num);
// console.log(findSquareRoot(16));

// ============================================================================================

// let pythagoras = (num1, num2) => Math.sqrt((num1 * num1) + (num2 * num2));
// console.log(pythagoras(3, 4));

// ============================================================================================

// let yourNumber = (num) => `Your number is ${num}`;
// console.log(yourNumber(5))

// ============================================================================================

// let monthlyPayment = yearlyPayment => {
//     let monthly = yearlyPayment / 12;
//     return monthly.toFixed(2);
// }
// console.log(monthlyPayment(1200));

// ============================================================================================

// let fancyAlgorithm = (num1, num2, num3) => {
//     let value = 0;
//     for (let index = 0; index < num3; index++) {
//         value = (value + num2) * num1;
//     }
//     return value / (num1 * (num3 * 10));
// }
// console.log(fancyAlgorithm(2,3,4));

// ============================================================================================

// let multiplyByAdding = (a, b) => {
//     let result = 0;
//     for (let i = 0; i < b; i++) {
//         result += a;
//     }
//     return result;
// }
// console.log(multiplyByAdding(6, 4))

// ============================================================================================

// let revert = (value) => !value;
// console.log(revert("one"));

// ============================================================================================

// let xor = (num1, num2) => num1 ^ num2;
// console.log(xor(3,5));

// ============================================================================================

let perfectSquare = param => Math.pow(param, 2);
console.log(perfectSquare(3));

// ============================================================================================