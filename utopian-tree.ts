//Utopian Tree from https://www.hackerrank.com/challenges/utopian-tree/problem

const n =14;

function utopianTree(n) {
    let height = 0;

    //run through the zero cycle to the number given, hence i<n+1
    for(let i=0; i<n+1; i++){
        if(i%2 === 0){
            height = height + 1;
        }
        if(i%2 !== 0) {
            height = height * 2;
        }
    }
    //console.log(0/2 === 0)

    return height;
}


console.log(utopianTree(n));

//result table
//cycle 0 -> 1 (+1)
//cycle 1 -> 2 (x2)
//cycle 2 -> 3 (+1)
//cycle 3 -> 6 (x2)
//cycle 4 -> 7 (+1)
//cycle 5 -> 15 (x2)
//cycle 6 -> 16 (+1)
