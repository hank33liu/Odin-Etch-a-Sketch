let sideLength = 9; //Length of board's side, use a slider to adjust later
let pixelCount = sideLength*sideLength; //Total number of pixels in the board

const board = document.querySelector(".board"); //Set board const

//Generate pixels in board and add to board
let pixelDivs = new Array();
for (var i=0; i < pixelCount; i++) {
    pixelDivs[i] = document.createElement('div');
    pixelDivs[i].className = 'pixel';
    pixelDivs[i].textContent = 'a';
    board.appendChild(pixelDivs[i]);
}

//Generate board row/col size string based off sideLength
let sideLengthPercentage = 100/sideLength;
let sideLengthPercentageString = '';
for (var i=0; i < sideLength; i++) {
    sideLengthPercentageString += `${sideLengthPercentage}% `
}

//Define size of row/col in the board
board.style.gridTemplateRows = sideLengthPercentageString;
board.style.gridTemplateColumns = sideLengthPercentageString;
