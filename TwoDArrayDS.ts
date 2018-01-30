
console.log("2D Array - DS from https://www.hackerrank.com/challenges/2d-array/problem")

//hardcoded array
let twoDArray: number[][] = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]
];

let sumOfFourNumbers: number[] = [];
let hourglasses: number[] = [];
let dNumber: number[] = [];
let maxSumOfHourglass: number;

function getSum(total: number, num: number){
    return total + num;
}

for(let i=0; i<6; i++){     //run loop 4 times for each array
    for(let j=0; j<4; j++){     //get 4 digits - start at zero that shit to 1, 2, and 3
        let temp = (twoDArray[i].slice(j, j+3));  //save the  24 entries to temp array
        sumOfFourNumbers.push((temp.reduce(getSum)));  //sum each 4 digits and save them 
        dNumber.push(temp[1])   //get the 'd' digits from each return array
    }
}

for(let i=0; i<16; i++){        //add abc + efg + d
    hourglasses.push(sumOfFourNumbers[i]+
                    sumOfFourNumbers[i+8]+
                    dNumber[i+4])
}

function getMax(a: number, b: number){
    return Math.max(a, b);
}
maxSumOfHourglass = hourglasses.reduce(getMax)

console.log("The hourglass max sum is: " + maxSumOfHourglass);
