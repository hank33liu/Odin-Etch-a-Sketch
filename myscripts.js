let sideLength = 10; //Length of board's side, use a slider to adjust later
let pixelCount = sideLength*sideLength; //Total number of pixels in the board
let sideLengthPercentage = 100/sideLength; //Percent of board side each row/col takes up
let sideLengthPercentageString = ''; //String holding the input to CSS 
const board = document.querySelector(".board"); //Set board const

///////////////////////////
///////////////////////////

//Function that updates pixelCount and sideLengthPercentage when slider is adjusted
//Also sets sideLengthPercentageString back to empty
function updateBoardSize() {
    pixelCount = sideLength*sideLength;
    sideLengthPercentage = 100/sideLength;
    sideLengthPercentageString = ''
}

//Function that generates pixels in board and add to board
function addPixels() {
    let pixelDivs = new Array();
    for (var i=0; i < pixelCount; i++) {
        pixelDivs[i] = document.createElement('div');
        pixelDivs[i].className = 'pixel';
        board.appendChild(pixelDivs[i]);
    }
}
addPixels();

//Function that sets size of board CSS gridTemplateRows/Columns
function setBoardSize(){
    for (var i=0; i < sideLength; i++) {
        sideLengthPercentageString += `${sideLengthPercentage}% `
    }

    //Define size of row/col in the board
    board.style.gridTemplateRows = sideLengthPercentageString;
    board.style.gridTemplateColumns = sideLengthPercentageString;
    }
setBoardSize();

//For the slider
var slider = document.getElementById("pixelRange");
var output = document.getElementById("slideValue");
output.textContent = `${slider.value} x ${slider.value}`; // Display the default slider value


// Function that updates the current slider value (each time you drag the slider handle)
//Sets new board size
//Then removes all pixels and adds in the new appropriate amount
slider.oninput = function() {
  output.textContent = `${this.value} x ${this.value}`;
  sideLength = this.value;
  board.textContent = '';
  updateBoardSize();
  addPixels();
  setBoardSize();

}