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

// let perfectSquare = param => Math.pow(param, 2);
// console.log(perfectSquare(3));

// ============================================================================================
// =================================== QUIZ for week 4// ======================================
// ============================================================================================

// const createFullName = (firstName, lastName) => firstName + " " + lastName;
// console.log(createFullName("Ollie", "Smith")); //expected output: Ollie Smith


// const doubleNumber = (number) => number * 2;
// console.log(doubleNumber(10)); //expected output: 20



// const getEvenNumbers = (array) => {
//     let evenNumbers = [];
//     for (let i of array) {
//         if (i % 2 === 0) {
//             evenNumbers.push(i);
//         }
//     }
//     return evenNumbers;
// }
// console.log(getEvenNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10])); // expected output: [2, 4, 6, 8, 10]



// const customersx = [
//     {
//         name: 'Sam',
//         address: {
//             street: '1234 W Bell Rd',
//             city: 'Phoenix',
//             zip: '85308',
//             state: 'AZ'
//         },
//         membershipLevel: 'GOLD',
//         age: 32
//     },
// ];

// let customer = customersx[0]
// console.log(customer);

// if (customer.name.charAt(0) === 'c') {
//     console.log("yes");
// } else {
//     console.log("no");
// }

// if (customer.membershipLevel === 'SILVER') {
//     console.log("YESSS");
// } else {
//     console.log("NOOOO");
// }

// if (customer.address.street !== undefined) {
//     console.log("Street field has a value");
// } else {
//     console.log("NOOOO");
// }

// const customers = [
//     {
//         // Object 1: Name does not start with C, no match for city/state, not gold/platinum, not silver and under 29
//         name: "Sam",
//         address: {
//             street: "1234 W Bell Rd",
//             city: "Phoenix",
//             zip: "85308",
//             state: "AZ",
//         },
//         membershipLevel: "BRONZE",
//         age: 32,
//     },
//     {
//         // Object 2: Address field (street) is undefined, will not be added to the results array
//         name: "Bob",
//         address: {
//             city: "Long Beach",
//             zip: "9000",
//             state: "CA",
//         },
//         membershipLevel: "GOLD",
//         age: 32,
//     },
//     {
//         // Object 4: Meets enough requirements, will be added to the results array
//         name: "Christina",
//         address: {
//             street: "1234 Alamitos Ave",
//             city: "Long Beach",
//             zip: "90002",
//             state: "CA",
//         },
//         membershipLevel: "SILVER",
//         age: 21
//     },
// ];
// const matchingCustomers = (custArray) => {
//     let resultArray = [];
//     for (let customer of custArray) {
//         //checks if undefined address properties
//         if (
//             customer.address.street === undefined ||
//             customer.address.city === undefined ||
//             customer.address.zip === undefined ||
//             customer.address.state === undefined
//         ) {
//             console.log("There are undefined address properties!", customer);
//         } else if (
//             //checks for uppercase C
//             customer.name.charAt(0) === "C" ||
//             //checks for City and State
//             (customer.address.city === "Peoria" && customer.address.state === "AZ") ||
//             //checks for membership level
//             customer.membershipLevel === ("GOLD" || "PLATINUM") ||
//             //checks for membership and age level
//             (customer.membershipLevel === "SILVER" && customer.age < 29)
//         ) {
//             console.log("This customer fits the criteria", customer);
//             resultArray.push(customer);
//         } else {
//             //else none of the above conditions are met
//             console.log("This customer does not fit the criteria!", customer);
//         }
//     }
//     console.log(resultArray);
// };

// matchingCustomers(customers);

