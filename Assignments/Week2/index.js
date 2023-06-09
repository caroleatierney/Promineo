// var loggedIn = false;
// var maxAttempts = 3;
// var attempts = 0;

// while (!loggedIn && attempts < maxAttempts) {
// var username = prompt('Username:');
//     var password = prompt('Password:');

//     if (username == 'samy123' && password == '12345') {
//         alert('Welcome back, ' + username);
//         loggedIn = true;
//     } else {
//         attempts += 1;
//         if (attempts < maxAttempts) {
//             alert('Inaccurate credentials!');
//         } else {
//             alert('You are locked out!');
//         }
//     }
// }

// ============================================================================================

// let monthNumber = 1

// while (monthNumber <= 13) {
//     switch (monthNumber) {
//         case (1):
//             console.log("January");
//             break;
//         case (2):
//             console.log("February");
//             break;
//         case (3):
//             console.log("March");
//             break;
//         case (4):
//             console.log("April");
//             break;
//         case (5):
//             console.log("May");
//             break;
//         case (6):
//             console.log("June");
//             break;
//         case (7):
//             console.log("July");
//             break;
//         case (8):
//             console.log("August");
//             break;
//         case (9):
//             console.log("September");
//             break;
//         case (10):
//             console.log("October");
//             break;
//         case (11):
//             console.log("November");
//             break;
//         case (12):
//             console.log("December");
//             break;
//         default:
//            console.log("Invalid Month");
//     }
//     monthNumber += 1;
// }

// ============================================================================================

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

// console.log(a>b || (b>d && c>d))

// ============================================================================================

// for (let i = 1; i <= 100; i++) {
//     console.log(i)
// }

// ============================================================================================

// for (let i =0; i <= 10; i++) {
//     console.log(i)
// }

// ============================================================================================

// for (let i = 3; i >= 1; i--) {
//     console.log(i)
// }

// console.log("It's the final countdown!")

// ============================================================================================

// let x = 15
// for (let i = 0; i <= x; i++) {
//     console.log(i)
//  }

// ============================================================================================

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " foo")
//     }
//  }

// ============================================================================================

// var userNumber = 0;
// let counter = userNumber

// if (userNumber >= 1 && userNumber <=100) {
//     while (counter <= 100) {
//         console.log(counter);
//         counter ++;
//     }
// } else {
//     console.log("Your number was not between 1 and 100.")
// }

// ============================================================================================

// var num = 4;
// var product;

// for (let i = 1; i <= 10; i++) {
//     product = num * i;
//     console.log(num + " x " + i + " = " + product)
//  }

// ============================================================================================

// var i = 0;

// do {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
//     i++;
// }
// while (i <= 99);

// ============================================================================================

// let userNumber = 10;

// do {
//     console.log(userNumber);
//     userNumber += 6;
// }
// while (userNumber <= 100);

// ============================================================================================

// for (let i = 0; i <= 99; i+=3) {
//     if (i % 3 === 0) {
//      console.log(i)
//     }
//  }

// ============================================================================================

// var requiredCupsOfRice = 5;
// var currentCupsOfRice = 0;

// while (currentCupsOfRice <= requiredCupsOfRice) {
//     if (currentCupsOfRice > 0) {
//         console.log("The bowl contains " + currentCupsOfRice + " cups of rice.")
//     }
//     currentCupsOfRice += 1;
// }

// console.log("We have enough rice!")

// ============================================================================================

// var requiredCupsOfRice = 5;
// var currentCupsOfRice = 0;

// while (currentCupsOfRice != requiredCupsOfRice) {
//     console.log('The bowl contains ' + (++currentCupsOfRice) + ' cups of rice.');
// }
// console.log('We have enough rice!');

// ============================================================================================

// var requiredCupsOfRice = 5;
// var currentCupsOfRice = 0;

// do {
//     console.log('The bowl contains ' + currentCupsOfRice++ + ' cups of rice.');
// } while (currentCupsOfRice !== requiredCupsOfRice);

// ======================================= Advanced Game ======================================

// var points = 0;
// var pointsReset = false; 
// var turnMax = 100;
// var pointsMax = 290;

// for (let turn = 0; turn <= turnMax; turn++) {

//     if (turn % 2 === 0) {
//         points += 5;
//     } else {
//         points += 3;
//     }

//     console.log("Turns: " + turn + " Points: " + points);

//     if (points === 125 && pointsReset == false) {
//         points = 25;
//         pointsReset = true;
//         turn++;
//         console.log("Turns: " + turn + " Points: " + points);
//     } else if (points >= 290) {
//         break;
//     }

// }


// =================================== Instructor's Solution ==================================

// Instructor's Solution

// var points = 0;
// var pointsReset = false;
// /*** DO NOT CHANGE THE CODE ABOVE THIS LINE ***/

// // WRITE YOUR CODE HERE
// for (var i = 0; i < 100 && points < 290; i++) {
//     if (points == 125 && pointsReset === false) {
//         points = 25;
//         pointsReset = true;
//     } else if (i % 2 === 0) {
//         points = points + 5;
//     } else {
//         points = points + 3;
//     }

//     console.log("Turns: " + i + " Score: " + points)
// }


// // ======================================= Added Assignments ======================================

// var canGo = true

// if (vacationTime === true && money >= planeTicket) {
//     canGo = true
//     console.log(canGo);
// } else {
//     canGo = false
//     console.log(canGo);
// }

// ============================================================================================

// This is how to do it!!! - Instructor solution
// console.log(money >= planeTicket && vacationTime)

// ============================================================================================

// if (money >= costOfSoda) {
//     console.log("I can buy a soda!");
// } else {
//     canGo = false
//     console.log("I need to earn some more money!");
// }


// ============================================================================================

// let finalAnswer = num1 % num2;
// console.log(finalAnswer);

// ============================================================================================

if (num1 === num2) {
    console.log("same")
} else if (num1 < num2) {
    console.log(num1);
} else {
    console.log(num2);
} 

// ============================================================================================

if (num1 < myNumber) {
    console.log(num1 + " is smaller than my number, " + myNumber);
} else if (num1 > myNumber) {
    console.log(num1 + " is larger than my number, " + myNumber);
} else {
    console.log(num1 + " is equal to my number, " + myNumber);
}

// ============================================================================================

if (num1 === num2) {
    console.log("num1 is equal to num2")
} else if (num1 > num2) {
    console.log(num1);
} else {
    console.log(num2);
} 

// ============================================================================================

let num = 10;

if (num1 >= num2) {
    if (num3 >= num4) {
        console.log("Both statements are true.");
    } else {
        console.log("The first statement is true, but the second is not.");
    }
} 
console.log("Program ended.");

// ============================================================================================

if (numberGrade >= 0 && numberGrade <= 59) {
    letterGrade = "F";
} else if (numberGrade >= 60 && numberGrade <= 69) {
    letterGrade = "D";
} else if (numberGrade >= 70 && numberGrade <= 79) {
    letterGrade = "C";
} else if (numberGrade >= 80 && numberGrade <= 89) {
    letterGrade = "B";
} else if (numberGrade >= 90 && numberGrade <= 100) {
    letterGrade = "A";
}

console.log(letterGrade);

// ============================================================================================

// instructor solution
if (numberGrade >= 90) {
    letterGrade = 'A';
} else if (numberGrade >= 80) {
    letterGrade = 'B';
} else if (numberGrade >= 70) {
    letterGrade = 'C';
} else if (numberGrade >= 60) {
    letterGrade = 'D';
} else {
    letterGrade = 'F';
}

console.log(letterGrade);

// ============================================================================================

switch (numberOfDay) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("The number of day is invalid.");
}

// ============================================================================================

switch(numberOfDay){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("The number of day is invalid.");
}