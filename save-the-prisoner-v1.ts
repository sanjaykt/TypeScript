//Save the Prisoner! from https://www.hackerrank.com/challenges/save-the-prisoner/problem
//only working for the this user case... it failed for the all other test case
//I will need to come back to this problem later...
//I cannot figure out what's wronge with the code

//n - number of prisoner
//m - number of sweets
//s - prisoners ID
const numberOfPrisoners = 5;
const mAndM = 2;
const serialID = 1;

function saveThePrisoner(numberOfPrisoners, mAndM, serialID){
    let warnPrisonerID = serialID;
    let mAndMDistributed = mAndM;
    for(let i = serialID; i<= numberOfPrisoners; i++) {
        mAndMDistributed -= 1;
        warnPrisonerID += 1; 
        if(mAndMDistributed === 1){
            break;
        }
        
        if (i === numberOfPrisoners && mAndMDistributed != 0){
            warnPrisonerID = 1;
            i = 1;
        }
    }
    return warnPrisonerID;
}

console.log("The result: "+saveThePrisoner(numberOfPrisoners, mAndM, serialID));
