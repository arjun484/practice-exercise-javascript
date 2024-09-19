//For a given array with marks of students -> [85, 97, 44, 37, 76, 60] 
//Find the average marks of the entire class

const marks = [85, 97, 44, 37, 76, 60];

// Calculate the sum of all marks
const sum = marks.reduce((acc, curr) => acc + curr, 0);

// Calculate the average
const average = sum / marks.length;

console.log(average); // Output: 66.5


//02.For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
//All items have an offer of 10% OFF on them. Change the array to store final price after applying offer
let prices = [250, 645, 300, 900, 50];

// Apply a 10% discount to each item
prices = prices.map(price => price - (price * 0.1));

console.log(prices); // Output: [225, 580.5, 270, 810, 45]




//# 03.Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”

//a.	Remove the first company from the array

//b.	Remove Uber & Add Ola in its place

//c.	Add Amazon at the end

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

 //the first company from the array will be removed
companies.shift();

// this code removes Uber & Add Ola in its place
const index = companies.indexOf("Uber");
if (index !== -1) {
  companies[index] = "Ola";
}

// c. Add Amazon at the end
companies.push("Amazon");

console.log(companies); // Output: ["Microsoft", "Ola", "Google", "IBM", "Netflix", "Amazon"]


