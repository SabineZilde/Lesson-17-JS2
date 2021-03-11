// 1. assign a number to a varaible. Print out in the console if the number is even or odd

const num = 8;
if (num % 2 === 0) {
    console.log('The value of num is even');
} else {
    console.log('The value of num is odd');
};

// 2. assign your age to a variable. Print out the age group you are in. Age groups are as follows:
//     0 - 18 years
//     19 - 30 years
//     31 - 40 years
//     41 - 50 years
//     51 + years

const myAge = 18;
if (myAge > 0 && myAge <= 18) {
    console.log('Your age group is 0 - 18 years');
} else if (myAge >= 19 && myAge <= 30 ) {
    console.log('Your age group is 19 - 30 years');
} else if (myAge >= 31 && myAge <= 40 ) {
    console.log('Your age group is 31 - 40 years');
} else if (myAge >= 41 && myAge <= 50 ) {
    console.log('Your age group is 41 - 50 years');
} else {
    console.log('Your age group is 51 + years');
};

// 3. assign a number to a varaible. 
//     Print out "Fizz" if the number is divisible without reminder by 2
//     Print out "Bazz" if the number is divisible without reminder by 3
//     Print out "Fizz Bazz" if the number is divisible without reminder by 2 and 3
//     Print out the number if none of above apply

const newNumber = 11;
if (newNumber % 2 === 0 && newNumber % 3 === 0) {
    console.log('Fizz Bazz');
} else if (newNumber % 3 === 0) {
    console.log('Buzz');
} else if (newNumber % 2 === 0) {
    console.log('Fizz');
} else {
    console.log(newNumber);
};