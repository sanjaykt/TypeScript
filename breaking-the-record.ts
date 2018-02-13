//Breaking the Records from https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem


//const score = [10, 5, 20, 20, 4, 5, 2, 25, 1];
const score = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]

function breakingRecords(score) {
    let highestScore = score[0];
    let leastScore = score[0];
    let highestScoreCount = 0;
    let leastScoreCount = 0;
    //let uniqueScoreArr = Array.from(new Set(score));
    //console.log(uniqueScoreArr)

    for(let entry of score){
        if(entry > highestScore){
            highestScore = entry;
            highestScoreCount++;
        }
        if(entry < leastScore){
            leastScore = entry;
            leastScoreCount++;
        }
    }
    console.log(highestScoreCount, leastScoreCount)
}


console.log(breakingRecords(score));

