//Between Two Sets from https://www.hackerrank.com/challenges/between-two-sets/problem


let a = [2, 4];
let b = [16, 32, 96];

function getTotalX(a, b) {
    let factorBy: boolean = false;
    let factorOf: boolean = false;
    let x = a[a.length-1]; //next possible number
    let xArr: number[] = []

    for(let index of a){
        if (a[a.length-1]%index === 0){
            factorBy = true;
        }
    }

    for(let index of b){
        if((index % b[0] === 0) && (b[0] % a[a.length-1] === 0)){
            factorOf = true;
        }
    }
    while(factorBy && factorOf && ((b[0] % x) === 0)){
        xArr.push(x);
        x *= 2;
    }

    let num = xArr.filter(num => num > a[a.length -1] && num < b[0]).length;

    console.log(num + 2)
}

getTotalX(a, b);
