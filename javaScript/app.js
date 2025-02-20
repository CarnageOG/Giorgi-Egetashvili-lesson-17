// 1.///////////////////////////////////
for (let i = 0; i <= 15; i++) {
    console.log(i);
}



// 2.///////////////////////////////////
let i = 0;
while (i <= 20) {
    console.log(i);
    i++;
}



// 3.///////////////////////////////////
let j = 0;
do {
    console.log(j);
    j++;
} while (j <= 25);



// 4.///////////////////////////////////
const numbers = [4, 5, 6, 7, 8, 9, 23, 24, 25, 26, 29];
for (let num of numbers) {
    if (num % 2 === 0) {
        console.log(num);
    }
}



// 5.///////////////////////////////////
const currentDay = new Date().getDay();
switch (currentDay) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Sunday");
}