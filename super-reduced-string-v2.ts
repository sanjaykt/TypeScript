//Super Reduced String from https://www.hackerrank.com/challenges/reduced-string/problem
//I got this code from the discussion... it's very good solution. I couldn't think of how to go back to the beginning of the string again...
//making i=0 is an excellent solution

let str = "baab";

for (let i = 1; i < str.length; i++) {
    //console.log("value of i: " + i)
    if (str.charAt(i) === str.charAt(i-1)) {
        str = str.substring(0, i-1) + str.substring(i+1);
        i = 0;
    }
}

if (str.length === 0){
    console.log("Empty String");
} else {
    console.log(str);
}
