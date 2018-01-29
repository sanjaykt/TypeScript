console.log("Compare the Triplets from 'https://www.hackerrank.com/challenges/compare-the-triplets/problem'")

let question: string = "Please enter 6 digits seperated by a space"

let inputArray: string[] = prompt(question).split(' ');


let inputNumbers: number[] = [];

for(let entry of inputArray) {
    inputNumbers.push(parseInt(entry));
}

let aliceScoreArray = inputNumbers.slice(0, 3);
let bobScoreArray = inputNumbers.slice(3, 6)

let aliceScore: number = 0;
let bobScore: number = 0;

function solve (aliceScoreArray: number[], bobScoreArray: number[]): number[] {
    for(let i=0; i<3; i++){
        if (aliceScoreArray[i] > bobScoreArray[i]) {
            aliceScore += 1;
        } else if(aliceScoreArray[i] < bobScoreArray[i]){
            bobScore += 1;
        }
    }
    return [aliceScore, bobScore]
}
console.log(solve(aliceScoreArray, bobScoreArray).join(" "));


