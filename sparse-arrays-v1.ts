console.log("Sparse Arrays from https://www.hackerrank.com/challenges/sparse-arrays/problem")

//hardcoded user input
let str = "4 aba baba aba xzxb 3 aba xzxb ab";

let strArr = str.split(" ");

let numberOfStrings = Number(strArr[0]);
let strings = strArr.slice(1, (numberOfStrings+1))

let numberOfQueries = Number(strArr[numberOfStrings+1]);
let queries = strArr.slice(numberOfStrings+2)
let resultArr: number[] =[];
let counter: number = 0;

for(let query of queries){
    for(let str of strings){
        if(query === str){
            counter += 1;
        }
    }
    resultArr.push(counter)
    counter = 0;
}

console.log("The result is: " + resultArr.join(" "));
