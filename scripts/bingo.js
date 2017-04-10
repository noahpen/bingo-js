/*  Noah Peneycad
    CISC282 Assignment #4
    April 10, 2017
*/

// 75 possible numbers
var usedNumbers = new Array(76);

function init() {
    generateNewCard();
}

function generateNewCard() {
    // set all elements in usedNumbers array as false
    resetUsedNumbers();
    // loops 24 times because there are 24 squares (not including free square)
    for (var i = 0; i < 25; i++) {
        if (i == 12) // skip free square
            continue;
        // generates a number for each square
        generateSquare(i);
    }
}

function generateSquare(squareNum) {
    var currentSquare = "sq" + squareNum;
    var number;
    // array of column numbers
    var baseNumbers = new Array(0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4);
    // generates random number for each square (depends on column)
    newNumber = (baseNumbers[squareNum] * 15) + generateNewNum();
    // loop makes sure there are no duplicates
    while (usedNumbers[newNumber] == true) {
        newNumber = (baseNumbers[squareNum] * 15) + generateNewNum();
    }
    // sets the used number in the array as true so no duplicates
    usedNumbers[newNumber] = true;
    // sets the current square to the new number
    document.getElementById(currentSquare).innerHTML = newNumber;
}

function generateNewNum() {
    // generates a random numbers between 1 and 15
    return Math.floor((Math.random() * 15) + 1); //15
}

function resetUsedNumbers() {
    // sets all elements of the usedNumbers array to false (resets the array)
    for (var j = 0; j < usedNumbers.length; j++) {
        usedNumbers[j] = false;
    }
}

// when clicked, generates a new random card
function generateAnotherCard() {
    resetUsedNumbers();
    generateNewCard();
}

