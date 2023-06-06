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

let monthNumber = 1

while (monthNumber <= 13) {
    switch (monthNumber) {
        case (1):
            console.log("January");
            break;
        case (2):
            console.log("February");
            break;
        case (3):
            console.log("March");
            break;
        case (4):
            console.log("April");
            break;
        case (5):
            console.log("May");
            break;
        case (6):
            console.log("June");
            break;
        case (7):
            console.log("July");
            break;
        case (8):
            console.log("August");
            break;
        case (9):
            console.log("September");
            break;
        case (10):
            console.log("October");
            break;
        case (11):
            console.log("November");
            break;
        case (12):
            console.log("December");
            break;
        default:
           console.log("Invalid Month");
    }
    monthNumber += 1;
}