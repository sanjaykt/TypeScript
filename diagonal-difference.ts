
console.log("Diagonal Difference form https://www.hackerrank.com/challenges/diagonal-difference/problem")

//hardcoded user input
let inputRows = [[11, 2, 9, 5], [4, 5, 3, 6], [10, 8, 5, 6], [2, 3, 4, 7]];

let num = ((Number(inputRows[0].length)));
//console.log("num is: " + num);
//console.log(typeof(num));
let primaryDiagonal = 0;
let secondaryDiagonal = 0;
let tempN = num - 1;    

for(let i=0; i<num; i++){
    primaryDiagonal += inputRows[i][i]
    console.log("primary diagonal: " + inputRows[i][i]);
    secondaryDiagonal += inputRows[i][tempN];
    //console.log("secodayr diagonal: "+ secondaryDiagonal);
    tempN = tempN - 1;
}

let difference = (Math.abs(primaryDiagonal - secondaryDiagonal));

console.log("The difference is: " + difference);


