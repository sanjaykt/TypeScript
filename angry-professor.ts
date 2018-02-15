//Angry Professor from https://www.hackerrank.com/challenges/angry-professor/problem

const k = 3;
const a = [ -1, -3, 4, 2 ];

function angryProfessor(k, a) {
    let classSize = a.length;
    let absentees = 0;
    for(let i=0; i<a.length; i++){
        if(a[i] > 0){
            absentees++;
        }
    }
    let present = classSize - absentees;

    if(present >= k){
        return "NO";
    } else {
        return "YES"
    }
}

console.log(angryProfessor(k, a));
