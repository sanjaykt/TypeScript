//Game of Thrones - 1 from https://www.hackerrank.com/challenges/game-of-thrones/problem

const s = "cdcdcdcdeeeef";

function gameOfThrones(s){
    let sArr = s.split('');
    let odd = 0;
    let sortedArr = (sArr.sort());

    for(let i=0; i<sortedArr.length; i++){
        let charsLenght = sortedArr.filter(num => num === sortedArr[i]).length;
        // console.log(temp)
        if(charsLenght % 2 != 0){
            odd++;
            if(odd > 2){
                return 'NO'
            }
        }
        i += charsLenght;
    }

    return "YES"
}

console.log(gameOfThrones(s));
