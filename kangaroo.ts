//Kangaroo from https://www.hackerrank.com/challenges/kangaroo/problem

let x1 = 0;
let v1 = 3;
let x2 = 4;
let v2 = 2;

function kangaroo(x1, v1, x2, v2) {
    // Complete this function
    let slower = v1 < v2 ? v1 : v2
    let behind = x1 < x2 ? x1 : x2
    let ahead = x1 > x2 ? x1 : x2
    let behindDistance = 0;
    let aheadDistance = 0;
    let behindVelocity = 0;
    let aheadVelocity = 0;

    let  remainder = (x1 - x2) % (v2 - v1) === 0;
    console.log(remainder);

    // if(slower === v1 && behind ===x1 || slower === v2 && behind ===x2){
    //     console.log("Nooo");
    // }
    if(behind === x1){
        behindDistance = x1;
        behindVelocity = v1
    } else {
        behindDistance = x2
        behindVelocity = v2       
    }

    if(ahead === x1){
        aheadDistance = x1;
        aheadVelocity = v1
    } else {
        aheadDistance = x2
        aheadVelocity = v2
    }
    
    while(!(slower === v1 && behind ===x1 || slower === v2 && behind ===x2) && behindDistance < aheadDistance){
        behindDistance = behindDistance + behindVelocity;
      //  console.log(behindDistance);
        aheadDistance = aheadDistance + aheadVelocity;
      //  console.log(aheadDistance); 
    }

    if(behindDistance === aheadDistance){
        return ("YES")
    } else {
        return ("NO")
    }
}

console.log(kangaroo(x1, v1, x2, v2));
