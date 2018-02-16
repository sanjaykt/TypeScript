//Lisa's Workbook https://www.hackerrank.com/challenges/lisa-workbook/problem

// const n = 5;
const n = 23;
// const k = 3;
const k = 10;
// const arr = [ 4, 2, 6, 1, 10 ];
const arr = [1, 29, 94, 15, 87, 100, 20, 55, 100, 45, 82, 80, 100, 100, 3, 53, 100, 2, 100, 100, 100, 100, 100, 100, 1]
//does not work for this input
//it print 6 instead of 11
//but works for the example input
//this passed two test cases and failed others

function workbook(n, k, arr) {
    let chapterPages = 0;
    let pages = 0;
    let specialPagesArr = [];

    function getSpecial(chPages, problems){
        if(problems < k){
            if(pages+1 === 1 || pages+1 === 2){
                specialPagesArr.push(pages+1)
                console.log(pages+1);
            }
        } else {
            let lower = 1, higher = 3;
            // console.log("pages: "+pages)
            for(let j=1; j<chPages+1; j++){
                if(pages+j >= lower && pages+j <= higher){
                    specialPagesArr.push(pages+j);
                    console.log(pages+j)
                }
                lower += 3;
                higher += 3;
            }
        }

    }

    for(let i=0; i<arr.length; i++){
        if (arr[i] > k) {
            if (arr[i] % k > 0) {
                console.log("arr >0: "+arr[i])
                chapterPages = Math.floor(arr[i] / k) + 1;
                getSpecial(chapterPages, arr[i]);
                pages += chapterPages;
            } else if (arr[i] % k === 0) {
                console.log("arr === 0: "+arr[i])
                chapterPages = Math.floor(arr[i] / k);
                getSpecial(chapterPages, arr[i]);
                pages += chapterPages;
            }
        }

        else {
            chapterPages = 1;
            console.log("arr = 1 : "+arr[i])
            getSpecial(chapterPages, arr[i]);
            pages += chapterPages;
        }
    }
    //console.log(pages)
    return specialPagesArr.length;
}

console.log(workbook(n,k,arr));
