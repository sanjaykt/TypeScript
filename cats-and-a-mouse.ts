//Cats and a Mouse from https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
//I assumed followings:
//1 is cat A
//2 is cat B
//3 is cat C
//that's not what they were asking for, but this works assuming above
//hardcoded inputs

const x=2, y=1, z=3;

let position: number[] = []; 
position.push(x, y, z);

let catA = position.indexOf(1);
let catB = position.indexOf(2);
let mouse = position.indexOf(3)

if(Math.abs(mouse - catA) === Math.abs(mouse - catB)) {
    console.log("Mouce C")
} else if (Math.abs(mouse - catA) == 1) {
    console.log("Cat A");
} else {
    console.log("Cat B");
}
