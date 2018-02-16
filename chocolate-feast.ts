//Chocolate Feast from https://www.hackerrank.com/challenges/chocolate-feast/problem

const n = 6;   //total money
const c = 2;    //const of the candy
const m = 2;    //wrappers require for one candy

function chocolateFeast(n, c, m) {
    let chocolates = 0;
    let wrappers = 0;
    chocolates = Math.floor(n/c);
    wrappers = chocolates;
    let addWrappers = 0;
//    console.log(wrappers)

    if(wrappers % m >= 0){
        chocolates += Math.floor(wrappers/m);
        addWrappers = Math.floor(wrappers/m);

        addWrappers += wrappers%m;
        // console.log(addWrappers)
        if(addWrappers % m >= 0){
            chocolates += Math.floor(addWrappers/m);
        }
    }
    console.log(chocolates)
}

chocolateFeast(n,c,m);
