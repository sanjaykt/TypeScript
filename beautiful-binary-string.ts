// Beautiful Binary String from https://www.hackerrank.com/challenges/beautiful-binary-string/problem

const b = "01100"

function beautifulBinaryString(b) {
    // Complete this function
    let matches = b.match(/010/g)
    
    if(matches === null) {
        return 0;
    } else {
        return matches.length
    }
}


beautifulBinaryString(b)
