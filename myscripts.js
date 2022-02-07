let sideLength = 10; //Length of board's side, use a slider to adjust later
let pixelCount = sideLength*sideLength; //Total number of pixels in the board
let sideLengthPercentage = 100/sideLength; //Percent of board side each row/col takes up
let sideLengthPercentageString = ''; //String holding the input to CSS 
const board = document.querySelector(".board"); //Set board const

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

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
        pixelDivs[i].addEventListener("mouseover", function() { this.className='pixel coloredPixel';});
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

//Function that resets the board to its default state
function resetBoard() {
    sideLength = 10;
    pixelCount = sideLength*sideLength;
    sideLengthPercentage = 100/sideLength;
    sideLengthPercentageString = '';
    slider.value = 10;
    sliderBoardAdjust();
}
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetBoard);






/////////////////////////////////////////////////
//For the slider
const slider = document.getElementById("pixelRange");
const output = document.getElementById("slideValue");
output.textContent = `${slider.value} x ${slider.value}`; // Display the default slider value

//Function that updates board when slider is adjusted
function sliderBoardAdjust() {
    output.textContent = `${slider.value} x ${slider.value}`;
    sideLength = slider.value;
    board.textContent = '';
    updateBoardSize();
    addPixels();
    setBoardSize();
}



//Sets new board size
//Then removes all pixels and adds in the new appropriate amount
//slider.oninput = sliderBoardAdjust(slider);
slider.oninput = function () {sliderBoardAdjust(slider)};


//FOr testing
function logsMoved() {
    console.log('moved');
}