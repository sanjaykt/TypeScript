//Cats and a Mouse from https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

const x=33, y=86, z=59;


function catAndMouse(x, y, z) {
    // Complete this function
    if(Math.abs(z-x) < Math.abs(z-y)){
        return ['Cat A']
    } else if (Math.abs(z-x) > Math.abs(z-y)){
        return ['Cat B']
    } else {
        return ['Mouse C']
    }
}

console.log(catAndMouse(x,y,z));


