//Drawing Boook from https://www.hackerrank.com/challenges/drawing-book/problem
//sovled for all user cases on HackerRank!!!
console.log("Drawing Boook from https://www.hackerrank.com/challenges/drawing-book/problem")
console.log("This will throw error for using Math function trunc!!!")
console.log("app.ts(20,33): error TS2339: Property 'trunc' does not exist on type 'Math'.\n\n")

//hardcoded input
const nOfPage = 2;
const page = 1;
const pageTurn: number[] = []
let minPageTurn: number = 0;

function solve(){
    if(nOfPage === 2 && page === 1){
        return minPageTurn = 0;
    } else if(nOfPage%2 === 0 && nOfPage - page === 1){
        console.log("if statement")
        return minPageTurn = 1;
    } else {
        console.log("else statement")
        let frontTurning = Math.trunc(page/2);
        pageTurn.push(Math.trunc(page/2));
        let backTurning = Math.trunc((nOfPage - page)/2)
        pageTurn.push(backTurning);
        minPageTurn = (Math.min(...pageTurn));
        return minPageTurn;
    }
}

solve();
console.log("Min page turn: "+minPageTurn);
