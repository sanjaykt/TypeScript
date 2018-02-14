//Designer PDF Viewer from https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

//const h = [ 1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ]
const h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];
const word = "zaba";

function designerPdfViewer(h, word) {
    // Complete this function
    // let heights = h.splice(0, word.length);
    // let maxHeight = Math.max(...heights);
    // return maxHeight * word.length;
    let heights = [];
    for(let i=0; i<word.length; i++){
        let index = word.charCodeAt(i) - 97;
        heights.push(h[index])
    }
    console.log(heights)

    let maxHeight = Math.max(...heights);
    return maxHeight * word.length;
}


console.log(designerPdfViewer(h, word));
