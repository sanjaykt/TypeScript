//Encryption from https://www.hackerrank.com/challenges/encryption/problem


const s = "feedthedog";

function encryption(s) {
    let colLenght = Math.ceil(Math.sqrt(s.length));
   // let row = Math.floor(Math.sqrt(s.length));
    let sArr = s.split("");
    let encryptedS = "";
    for(let i=0; i<colLenght; i++){
        for(let j=i; j<sArr.length; j=j+colLenght){
            encryptedS += sArr[j];
        }
        encryptedS += " ";
    }
    return encryptedS;
}


console.log(encryption(s));
