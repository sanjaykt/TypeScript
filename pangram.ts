//Pangram from https://www.hackerrank.com/challenges/pangrams/problem

const input = "We promptly judged antique ivory buckles for the next prize ";

//console.log(input.replace(/ +/g, ""));

const noSpaceInput = input.replace(/ +/g, "").toLowerCase();

const inputArr = noSpaceInput.split("");

const sortedInputArr = inputArr.sort();
// console.log(temp);
let isPangram = true;

for(let i=0; i<26; i++){  
    isPangram = sortedInputArr.some(index => index === String.fromCharCode(97 + i));
    if(!isPangram){
        break;
    }
    //console.log(isPangram);
}
// isPangram = sortedInputArr.some(index => index === String.fromCharCode(97+25));
// console.log(String.fromCharCode(97+25))
// console.log(isPangram);

if(isPangram){
    console.log("pangram");
} else {
    console.log('not pangram');
}
