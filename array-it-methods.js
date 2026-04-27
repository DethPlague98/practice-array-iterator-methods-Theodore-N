//Task 1 Adding and removing elements
let fruits = ["apple", "banana", "cherry"];

fruits.push("orange");
fruits.shift();
fruits.unshift("grape");

console.log(fruits);
//Task 2 Query and Access
let colors = ["red", "blue", "green", "blue", "yellow"];

let arrTask2 = [colors.includes("blue"), colors.indexOf("blue"), colors.lastIndexOf("blue")];
console.log(arrTask2);

//Task 3 Combining arrays
let teamA = ["Alice", "Bob"];
let teamB = ["Charlie", "Diana"];
let allTeams = teamA.concat(teamB);

allTeams.push("Eve");
console.log(allTeams);

//Task 4 Extracting and splicing
let numbers = [10, 20, 30, 40, 50];
let middleNumbers = numbers.slice(1,3);
numbers.splice(3, 2, 60, 70);

console.log(middleNumbers);
console.log(numbers);
//Task 5 Sorting and reversing
let scores = [85, 70, 95, 60, 75];
scores.sort((a, b) => a - b).reverse();

console.log(scores);