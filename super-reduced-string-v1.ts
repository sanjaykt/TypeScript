//Super Reduced String from https://www.hackerrank.com/challenges/reduced-string/problem
//doesn't work with all test cases! It needs some other looping mechanism...for input 'baab', the output will be 'aa' which is wrong
let s = "aaabccddd";

let strArr = s.split('');
//console.log(strSring);
let DELTE_COUNT = 2;

for(let i=0; i<strArr.length; i++) {
    if(strArr[i] === strArr[i+1]){
        strArr.splice(i,DELTE_COUNT);
    }
}

console.log(strArr.join(''));
