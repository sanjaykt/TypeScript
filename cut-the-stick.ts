//Cut the sticks from https://www.hackerrank.com/challenges/cut-the-sticks/problem


//const arr = [ 5, 4, 4, 2, 2, 8 ];
const arr = [1, 2, 3, 4, 3, 3, 2, 1]

function cutTheSticks(arr) {
    let min = Math.min(...arr);
    let numReduced = [];
    let counter = 0;
    min = Math.min(...arr);
    removeZerosAndNegativesNumb(arr);
    let arrLength = arr.length;

    while(arrLength > 0){
        for(let i=0; i<arr.length; i++){
            arr[i] = arr[i] - min;

            if(arr[i] >= 0){
                counter++
            }
        }
        numReduced.push(counter);
        counter = 0;
        removeZerosAndNegativesNumb(arr);
        arrLength = arr.length;
     //   console.log("arrLength: " + arrLength)
        min = Math.min(...arr);
     //   console.log("min: "+min)
    }

    function removeZerosAndNegativesNumb (arr) {
        let i = arr.length;
        while (i--){
            if(arr[i] <= 0){
                arr.splice(i, 1)
            }
        }
    }
    //return(numReduced);
    console.log(numReduced);
}


cutTheSticks(arr);
