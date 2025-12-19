let mass = "Wonderful, Joyful, Happiness, Time, Task, Apple";

let re = /\b[^aA\s]{6,}\b/g;

let result = mass.match(re);

console.log(result);