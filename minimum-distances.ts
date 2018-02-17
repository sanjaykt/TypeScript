//Minimum Distances from https://www.hackerrank.com/challenges/minimum-distances/problem

const a = [ 7, 1, 3, 4, 1, 7 ];

function minimumDistances(a) {
    let distanceArr = [];
    let counter = 1;

    for(let i=0; i<a.length; i++){
        for(let j=0; j<a.length-counter; j++){
           // sum = distanceArr[i] + distanceArr[j+counter];
            if(a[i] === a[j+counter]){
                //console.log(i);
                //console.log(j+counter);
                distanceArr.push((j+counter) - i);
            }
        }
        counter++;
    }
    if(distanceArr.length === 0){
        return -1;
    } else {
        return Math.min(...distanceArr);
    }
}

console.log(minimumDistances(a));
