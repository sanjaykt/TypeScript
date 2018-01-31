//https://www.hackerrank.com/challenges/migratory-birds/problem
console.log("Migratory Birds from https://www.hackerrank.com/challenges/migratory-birds/problem\n")

//hardcoded input
let arr = [1, 4, 5, 5, 5, 3];
let numberOfBirds: number[] = []; //

for(let i=1; i<=5; i++){
    //look for numbers 1 to 5 in the array
    //this will create an array of the each numbers occurence
    //at the same time, count the lenght of the arrays and push
    //it in the array
    numberOfBirds.push(arr.filter(element => element === i).length);    
}

let maxNumber = Math.max(...numberOfBirds)
//console.log(typeof(maxNumber));

console.log("maps to types of bird (1 2 3 4 5) to numbers of that type of birds: "+numberOfBirds);
console.log("numbers of occurences: "+ maxNumber);

let typeId = (numberOfBirds.indexOf(maxNumber)+1);

console.log("Type "+typeId + ": " + maxNumber + " birds");
