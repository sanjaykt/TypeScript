console.log("A Very Big Sum from https://www.hackerrank.com/challenges/a-very-big-sum/problem")
//hardcoded input
let inputString = "1000000001 1000000002 1000000003 1000000004 1000000005";

// function getSum(total: number, num: number){
//     return total + num;
// }

let inputArrStr = inputString.split(" ");
//console.log(inputArrStr);

let inputNums: number[] =[];

for (let entry of inputArrStr){
    inputNums.push(parseInt(entry));
}

//const sum = inputNums.reduce(getSum); 
const sum = inputNums.reduce((total: number, num: number) => total + num)
console.log("The sum of all numbers is: " + sum);
