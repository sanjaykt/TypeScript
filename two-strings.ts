//Two Strings from https://www.hackerrank.com/challenges/two-strings/problem

let s1 = "hrtybirxncuiailznohfawjwipdtupnxnisbwcplozwrzt";
let s2 = "ngdmqotxkpnuhmpfmajthzdtnztrqyugendiublcwp";

function twoStrings(s1, s2){

    for(let i=0; i<s1.length; i++){
      //  console.log(s2.indexOf(s1.charAt(i)));
        if(s2.indexOf(s1.charAt(i)) > 0){
            return "YES"
        }
    }
    return "NO"
}

console.log(twoStrings(s1,s2));
