// ============================================================================================
// Array Video example

// var customerNames = [];
// customerNames.push('Sam Smith');
// customerNames.push('Tommy Guns');

// for(let i=0; i < customerNames.length; i++) {
//     console.log(customerNames[i]);
// }

// for (name of customerNames) {
//     console.log(name);
// }

// ============================================================================================
// three ways to declare an array with 5 elements

// let gradesArray = new Array(5);
// let gradesArray = [100, 79, 80, 90, 100];
// let gradesArray = new Array(100, 79, 80, 90, 100);

// // array with no length
// let gradesArray = [];
// let gradesArray = new Array();

// gradesArray.push(100);
// gradesArray.push(79);
// gradesArray.push(80);
// gradesArray.push(90);
// gradesArray.push(100);

// ============================================================================================

// let fullName = "Mary" + " " + "Brown";
// let gradesArray = [100, 79, 80, 90, 100];

// console.log("\n\nStudent: " + fullName);
// console.log("Grades: ");
// for (let i = 0; i < 5; i++) {
//     console.log((i + 1) + ": " + gradesArray[i]);
// }

// ============================================================================================

// let fullName = "Mary" + " " + "Brown";
// let gradesArray = [100, 79, 80, 90, 100];
// let counter = 1;

// console.log("\n\nStudent: " + fullName);
// console.log("Grades: ");
// for (let grade of gradesArray) {
//     console.log((counter++) + ": " + grade);
// }

// // Now Add Another Grade
// gradesArray.push(85);
// // Reset the counter to 1;
// counter = 1;
// console.log("\n\nStudent: " + fullName);
// console.log("Grades: ");
// for (let grade of gradesArray) {
//     console.log((counter++) + ": " + grade);
// }

// ********************************************************************************************
// ****************************     FUNCTIONS      ********************************************
// ********************************************************************************************

// ============================================================================================

// function myFunction() {
//     for (let j = 0; j < 100; j++) {
//         console.log(j);
//     }
// }

// myFunction();

// ============================================================================================

// function createFullName(firstName, lastName) {
//     console.log(firstName + " " +lastName);
// }

// createFullName('Tom', 'Sawyer');

// ============================================================================================

// function createFullName(firstName, lastName) {
//     return firstName + " " + lastName;
// }

// console.log(createFullName('Tom', 'Sawyer'));

// ============================================================================================

// function createFullName(firstName, lastName) {
//     return firstName + " " + lastName;
// }

// var fullName = createFullName('Tom', 'Sawyer');
// console.log("Welcome, " + fullName);

// ============================================================================================

// functions should be verbs

// ============================================================================================

// function checkCanDrive(age) {
//     return (age >= 16);
// }

// // Now, we need to invoke that function, or call that function for it to be useful.

// var currentAge = 14;

// console.log(checkCanDrive(currentAge));

// if (checkCanDrive(currentAge)) {
//     console.log('This person can drive');
// } else {
//     console.log('This person cannot legally drive');
// }

// ============================================================================================

// let fullName = "Mary" + " " + "Brown";
// let gradesArray = [100, 79, 80, 90, 100];

// function lowestGrade(gradeBook) {
//     if (gradeBook.length > 0) {
//         let lowGrade = gradeBook[0];
//         for (let grade of gradeBook) {
//             if (grade < lowGrade) {
//                 lowGrade = grade;
//             }
//         }
//         return lowGrade;
//     } else {
//         return 0;
//     }
// }

// console.log("\n\nStudent: " + fullName);
// console.log("Grades: ");
// for (let i = 0; i < gradesArray.length; i++) {
//     console.log("\t" + (i + 1) + ": " + gradesArray[i]);
// }
// console.log("Evaluation: ");
// console.log("\tLowest Grade is: " + lowestGrade(gradesArray));

// ============================================================================================

// Function that returns the square of a number

// function getSquare(number) {
//     return number * number;
// }

// console.log("\n\nThe number squared is: " + getSquare(8));

// ============================================================================================

// Function that returns a number raised to a power
// let x;
// let y;
// let powerResult = 0;

// function getPowerValue(x, y) {
//     for(let i= 1; i < y; i++) {
//         if (powerResult == 0) {
//             powerResult = x;
//         }
//         powerResult = (powerResult * x)
//     }
//     return powerResult
//  }

// console.log("\n\nThe number raised to power submittted is " + getPowerValue(2,3));

// ********************************************************************************************
// ****************************     OPEN CLASS     ********************************************
// ****************************     FUNCTIONS      ********************************************
// ********************************************************************************************

// function printHelloWorld() {
//     console.log("Hello World!");
// }

// printHelloWorld();

// ============================================================================================

// console.log(calculateTip(totalBill));

// ============================================================================================

// function sumOfTwo(a, b) {
//     return a + b;
// }

// ============================================================================================

// console.log(multiplyByTwo(arg1));

// ============================================================================================

// function speakFriend(word) {
//     if (word === "Mellon") {
//         return "Enter";
//     } else {
//         return "Access Denied";
//     }
// }

//  Instructor's solution

// function speakFriend(a) {
//     if (a == "Mellon") {
//         return "Enter";
//     }
//     return "Access Denied";
// }

// ============================================================================================

// function loopUntilX(number) {
//     for (i = 0; i < number; i++) {
//         console.log(i);
//     }
//     return true;
// }

// console.log(loopUntilX("testing"));

// loopUntilX(5);


// ============================================================================================

// function findCircumference(radius) {
//     return 2 * Math.PI * radius;
// }

// console.log(Math.PI);
// console.log(findCircumference(10));

// ============================================================================================

// function checkout(cardBalance, price) {
//     if (price > cardBalance) {
//         return false;
//     } else {
//         return cardBalance - price;
//     }
// }

// console.log(checkout(5, 19));
// console.log(checkout(8, 3));

// console.log(checkout(500,200, 40));

// ============================================================================================

// function isBlue(word) {
//     // let lcColor = word.toLowerCase()
//     let lcColor = word.toUpperCase()
//     // if (lcColor == "blue") {
//     if (lcColor == "BLUE") {
//     return true;
//     }
//     return false;
// }

// console.log(isBlue("BlUE"));
// console.log(isBlue("blue"));
// console.log(isBlue("yellow"));
// console.log(isBlue(word));

// instructor solution

// function isBlue(var1) {
//     return var1.toLowerCase() === "blue";
// }

// console.log(isBlue(word));
// ============================================================================================

// function returnSum(num1, num2, num3) {
//     return num1 + num2 + num3;
// }

// console.log(returnSum(2, 3));
// console.log(returnSum(a, b, c));

// ********************************************************************************************
// ****************************     OPEN CLASS     ********************************************
// ****************************       ARRAYS       ********************************************
// ********************************************************************************************

// groceryList = ["granola", "milk", "eggs"];

// ============================================================================================

// attendanceList[0] = "Steven";
// console.log(attendanceList);

// ============================================================================================

// console.log(myList.length);
// console.log(myList[myList.length - 1]);

// ============================================================================================

// studentList.push('Mary');

// ============================================================================================

// let studentList = ["Carole", "David", "Adrienne", "Grant", "Joe"];
// console.log(studentList)
// let index = studentList.indexOf("Grant");
// studentList.splice(index, 1);
// console.log(studentList)

// ============================================================================================

// let otherArrayName = ["Carole", "David", "Adrienne", "Grant", "Joe"];


// function printArray(array) {

//     for (let name of array) {
//         console.log(name)
//     }
// }

// printArray(otherArrayName);

// ============================================================================================

// var staticArray = ["Henry", "Peter", "Wendy"];
// var input = ["Abigail"];

// function joinArrays(arr1, arr2) {
//     let newArray = arr1.concat(arr2);
//     return newArray
// }

// console.log(joinArrays(input, staticArray));

// ============================================================================================


// ****************       failed !!!!!!!!!        **********************


// let array1 = [3, 25, 4, 12, 5, 2, 6, 11, 21, 5, 1, 15];
// let array1 = ["Banana", "Apple", "Melon", "Zucchini"]

// function sortArray(array) {
    // console.log(typeof(array[1]));
    // if (typeof(array[1]) === "string") {
        // return array.sort();
    // } else if (typeof(array[1]) === "number") {
    //     return array.sort((a, b) => a - b);
    // }
// }

// function sortArray(array) {
//     return array.sort();
// }

// console.log(sortArray(array1));

// ============================================================================================

// let input = ["Henry", "Peter", "Wendy"];
// function reverseArray(array) {
//     return(array.reverse());
// }

// console.log(reverseArray(input));

// ============================================================================================

var grads = ["Sam"];

function gradList(graduates) {
    graduates.push("Beatriz", "Yolanda", "Rizo");
    graduates.sort();
    graduates.reverse();
    return(graduates);
}

console.log(gradList(grads));


// ============================================================================================