//String Construction from https://www.hackerrank.com/challenges/string-construction/problem

const s = "abab";

function stringConstruction(s) {
    let copy = "";
    let cost = 0;
    for(let i=0; i<s.length; i++){
        if(!(copy.includes(s.charAt(i)))){
            copy += s.charAt(i);
            cost++;
          //  console.log("The cost is: " +cost)
          //  console.log((copy.includes(s.charAt(i))))
        }
    }

  //  console.log('Blue Whale'.includes('l'));
    return cost;

}

console.log(stringConstruction(s));
