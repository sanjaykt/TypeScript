//Plus Minus from https://www.hackerrank.com/challenges/plus-minus/problem


const arr = [ -4, 3, -9, 0, 4, 1 ]


function plusMinus(arr) {
    let posNum = arr.filter(index => index > 0).length;
    let negNum = arr.filter(index => index < 0).length;
    let zeros = arr.filter(index => index === 0).length;

    //print the fraction of them in the array
    console.log(posNum/arr.length);
    console.log(negNum/arr.length);
    console.log(zeros/arr.length);
}

plusMinus(arr);
