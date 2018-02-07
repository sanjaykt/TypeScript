//weighted uniform strings from https://www.hackerrank.com/challenges/weighted-uniform-string/problem

const s = 'abccddde';
const x = 12;
let uniformNum: number[] = []
let weight;
let numberOfTimes = 3;
let number = 1;

for(let i=0; i<s.length; i++){
    let singleChar = s.charAt(i)

    if (s.charAt(i) === s.charAt(i+1)){
        if(i>0 && s.charAt(i-number) === s.charAt(i+1)) {
            weight = (singleChar.charCodeAt(0) - 96) * numberOfTimes;
            uniformNum.push(weight)
            number++;
            numberOfTimes++;
           // console.log("executed")
        }
         else {
            weight = (singleChar.charCodeAt(0) - 96) * 2
            uniformNum.push(weight)
        }
    }
    uniformNum.push(singleChar.charCodeAt(0) - 96)
}

let result = uniformNum.some(index => index === x);

// for(let index of uniformNum){
//     console.log(index);
// }

// console.log(result);

if(result){
    console.log("Yes")
} else {
    console.log("No")
}



//console.log(str.charAt(2) === str.charAt(3))
