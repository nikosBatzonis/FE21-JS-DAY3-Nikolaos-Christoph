"use strict";

// Intermediate

// ex 1 | Compare two numbers

let Martin = 76;
let Thomas = 85;
let Klaus = 65;
let Maria = 93;
let David = 81;

let classGrade = [76, 85, 65, 93, 81];
let classAvg = 0;

for (let i = 0; i < classGrade.length; i++) {
    console.log(classGrade[i]);
    classAvg += classGrade[i] / classGrade.length;
}
console.log(classAvg);

let avg = (grade) => {
    if (grade < 60) {
        console.log("F");
    } else if (grade < 70) {
        console.log("D");
    } else if (grade < 80) {
        console.log("C");
    } else if (grade < 90) {
        console.log("B");
    } else {
        console.log("A");
    }

    return grade / 5;
};
console.log(avg(Klaus));

// ex 2 | FizzBuzz

for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// ex 3

for (let i = 0; i < 7; i++) {
    console.log(`${i.toStirng(2).join("*")}`);
}