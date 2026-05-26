// 1. Javascript arrays
let names = ["Olive", "Charles", "Eliza"]
console.log(names);

console.log(names[1]);  // Returns Charles
console.log(names[3]);  // Returns "undefined" equivalent of null due to being out of scope

// Options for returning the last element of the array
console.log(names[names.length - 1]);

// JavaScript allows for mixed types in arrays
let ages = [8, 6, 2];

let mixArray = ["Olive", 8, "Charles", 6, "Eliza", 2];
console.log(mixArray);

// 2. Javascript objects
let studentName = "Bob";
let studentClass = "WDD131";

// literal objects
let student = {
    // Key value pairs
    name : "Bob",
    class : "WDD131",
    grade : "A",
    age : 27
}

console.log(student);
console.log(student.class);

// 3. Array methods
names.forEach((name) => {    // Anonymous function (Function with no name)
    // this code executes once per each item in the array
    console.log(name);
    // console.log("hey");S
})
// Map returns a NEW array with values returned from function
let newNameArray = names.map((name) => {
    return name + " WARIO";
})
console.log(newNameArray);

// REMINDER: How to make a regular function
// function lastNameFUnction(name) {
//     return name + " WARIO";
// }

// Filter function returns a new array with filtered values
let filteredArray = names.filter((name) => {
    // filter returns boolean. True keep, false don't keep
    // return name[0] === 'C';
    return name.includes('e');
})
console.log(filteredArray);

// 4. Reduce
const numbers = [125, 20, 5];

let reducedNumbers = numbers.reduce(myFunc);

function myFunc(total, num) {
    return total - num;
}
console.log(`REDUCE: ${reducedNumbers}`);

// 5. IndexOf
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple");
console.log(`Index of "Apple": ${index}`);

// 6. Template Literals
const movieSummary = `
  <div class="movie">
    <h2>${movie.title}</h2>
    <p>${movie.genre} - ${stars}</p>
  </div>
`;

document.getElementById("movie-list").innerHTML += movieSummary;  