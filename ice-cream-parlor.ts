//Ice Cream Parlor from https://www.hackerrank.com/challenges/icecream-parlor/problem

const m = 4;
const arr = [ 2, 2, 4, 3 ];

function icecreamParlor(m, arr) {
   // let sortedArr = arr.sort((a,b) => a - b);
    let sum = 0;
    //console.log(arr);

    let counter = 1;
    //run upto the length-1 only
    //add index 0 to index 1,2,3 then index 1 to 2,3, then index 2 to 3
    //used counter to keep moving to the next digit
    //there must be better way to do this... This is little confusing
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-counter; j++){
            sum = arr[i] + arr[j+counter];
            if(sum === m){
                //console.log(sum)
                //console.log([i]);
                return [i+1, j+counter+1];
            }
        }
        counter++;
    }
}

console.log(icecreamParlor(m, arr));
