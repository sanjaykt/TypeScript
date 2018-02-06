//Mars Exploration from https://www.hackerrank.com/challenges/mars-exploration/problem

const s = 'SOSSPSSQSSOR'

const s2 = 'SOSOOSOSOSOSOSSOSOSOSOSOSOS'

function marsExploration(s) {
    //return s.match(/[^SOS]/g).length;
    let counter = 0;
    for(let i=0; i<s.length; i=i+3){
        let subStr = s.substring(i, i+3)
        console.log(subStr);
        
        if(subStr.charAt(0) != 'S'){
            counter = counter + 1;
        }
        if(subStr.charAt(1) != 'O'){
            counter = counter + 1;
        }
        if(subStr.charAt(2) != 'S'){
            counter = counter + 1;
        }
    }
    return counter;
}


console.log(marsExploration(s2));
