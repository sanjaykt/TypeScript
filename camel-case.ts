//CamelCase from https://www.hackerrank.com/challenges/camelcase/problem

let s = "saveChangesInTheEditor";

// console.log(s.length - s.search("[A-Z]");
console.log(s.split(/[A-Z]/g))
console.log(s.split(/[A-Z]/g).length);

//better solution with using match method
//console.log(str1.match(/[A-Z]/g).length);
