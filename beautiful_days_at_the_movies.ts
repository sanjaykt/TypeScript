//Beautiful Days at the Movies from https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

const i = 20;
const j = 23;
const k = 6

function beautifulDays(i, j, k){
    let days: number[] = [];
    let dayReversedNum: number[] = [];
    let counter = 0;

    //count the days
    for(let d = i; d <= j; d++){    
        days.push(d);
    }

    //convert to string and back to number
    for(let day of days){   
        let dayReversedStr  = day.toString().split('').reverse();
        dayReversedNum.push(Number(dayReversedStr.join('')))
    }
    // console.log(dayReversedNum);
    // console.log(days);

    for (let i=0; i<days.length; i++){
        if (Math.abs(days[i] - dayReversedNum[i]) % k === 0){
            counter += 1;
        }
    }

    return counter;
}


console.log(beautifulDays(i, j, k));
