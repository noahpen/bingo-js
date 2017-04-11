/*  Noah Peneycad
    CISC282 Assignment #4
    April 10, 2017
*/

// 75 possible numbers
var usedNumbers = new Array(76);
var calledNumbers = new Array();

// winning combinations
var winners = [
			['sq0','sq1','sq2','sq3','sq4'],
			['sq5','sq6','sq7','sq8','sq9'],
			['sq10','sq11','sqfree','sq13','sq14'],
			['sq15','sq16','sq17','sq18','sq19'],
			['sq20','sq21','sq22','sq23','sq24'],
			['sq0','sq5','sq10','sq15','sq20'],
			['sq1','sq6','sq11','sq16','sq21'],
			['sq2','sq7','sqfree','sq17','sq22'],
			['sq3','sq8','sq13','sq18','sq23'],
			['sq4','sq9','sq14','sq19','sq24'],
			['sq0','sq6','sqfree','sq18','sq24'],
			['sq4','sq8','sqfree','sq16','sq20']
		];

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
    document.getElementById(currentSquare).value = newNumber;
}

function generateNewNum() {
    // generates a random numbers between 1 and 15
    return Math.floor((Math.random() * 15) + 1); //15
}

function resetUsedNumbers() {
    // sets all elements of the usedNumbers array to false (resets the array)
    for (var i = 0; i < usedNumbers.length; i++) {
        usedNumbers[i] = false;
    }
}

// when clicked, generates a new random card
function generateAnotherCard() {
    resetUsedNumbers();
    generateNewCard();
    resetSquareColours();
}

// resets all squares except FREE to white
function resetSquareColours() {
    for (var i = 0; i < 25; i++) {
        if (i == 12)
            continue;
        var currentSquare = document.getElementById("sq" + i);
        currentSquare.style.backgroundColor = "#ffffff";
    }
    return;
}

function markSquare(square) {
    var currentSquare = document.getElementById(square);
    if (currentSquare.style.backgroundColor == "lightblue") 
        currentSquare.style.backgroundColor = "#ffffff";
    else
        currentSquare.style.backgroundColor = "lightblue";
    return;
}

function callNumber() {
    var rand = Math.floor(Math.random() * 75) + 1; // random number between 1 and 75
    // if the number is in the array (already been called)
    if (calledNumbers.includes(rand))
        callNumber();
    else {
        calledNumbers.push(rand);
        if (rand >= 1 && rand <= 15)
            document.getElementById("currentCall").innerHTML = 'B' + rand;
        else if (rand >= 16 && rand <= 30)
            document.getElementById("currentCall").innerHTML = 'I' + rand;
        else if (rand >= 31 && rand <= 45)
            document.getElementById("currentCall").innerHTML = 'N' + rand;
        else if (rand >= 46 && rand <= 60)
            document.getElementById("currentCall").innerHTML = 'G' + rand;
        else
            document.getElementById("currentCall").innerHTML = 'O' + rand;
        document.getElementById("calledNums").innerHTML = calledNumbers;
    } 
}

