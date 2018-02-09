//Separate the Numbers from https://www.hackerrank.com/challenges/separate-the-numbers/problem

function separateNumbers(s) {
    var numStr = s;
    var firstNum = 0;
    var nextDigit = 0;
    var testStr = '';

    for (var i = 1; i <= numStr.length/2; i++) {
        firstNum = parseInt(numStr.substr(0, i));
        testStr = firstNum.toString();
        nextDigit = firstNum;
        //built up the test-string until equal in length
        while (testStr.length < numStr.length && numStr != testStr) {
            // this will not work for number more that 53 bits in JavaScript
            nextDigit++;
            testStr += nextDigit.toString(); 
        }
        //check if the test-string is equal or not
        if (testStr == numStr) {
            break;
        }
    }

    if (testStr === numStr) {
        console.log('YES ' + firstNum);
    }
    else {
        console.log('NO');
    }
}
    
(separateNumbers('99100'))

// will not work for this big number (separateNumbers('99332720572758669933272057275867'))
