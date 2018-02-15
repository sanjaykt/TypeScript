//Day of the Programmer from https://www.hackerrank.com/challenges/day-of-the-programmer/problem

const year = 2017;


function solve(year){
    // Complete this function
    if(year === 1918) {
        return "26.09.1918"
    } else if(year <= 1917 && year%4 === 0) {4
        return ("12.09." + year);
    } else if((year%400 === 0) || (year%100 !== 0 && year%4 === 0)){
        return ("12.09." + year);
    } else {
        return ("13.09." + year)
    }
}


console.log(solve(year));
