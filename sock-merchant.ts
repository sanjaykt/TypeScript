//Sock Merchant from https://www.hackerrank.com/challenges/sock-merchant/problem

const n = 9;
const  ar = [ 10, 20, 20, 10, 10, 30, 50, 10, 20 ];
const holdingArr = [];
function sockMerchant(n, ar) {
    let sortedArr = ar.sort();
    let sockCountArr = [];
    let prev;
    let count = 0;


    for(let i=0; i<sortedArr.length; i++){
        if(sortedArr[i] !== prev){
            // sockCountArr.push(sortedArr[i]);
            sockCountArr.push(1);
        } else {
            sockCountArr[sockCountArr.length-1]++;
        }
        prev = sortedArr[i];
    }
    //console.log(sortedArr);
    for(let index of sockCountArr){
        count += Math.floor(index/2);
    }
    //console.log(count);
    return count;
}

console.log(sockMerchant(n, ar));
