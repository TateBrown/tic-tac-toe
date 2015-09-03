/*

Tic Tac Toe

Most of the areas that will need more code are labeled with TODO

Simple version: 
	1. Set up the game so that the players take turns rather than just player 1.
	2. Checking if the game board has a win
	3. Reset the game board & player

Simple version step 2:
	1. Set up the game so that the players do not need to press the button to see who won
	2. Make the winning prompt show up in html rather than in an alert box (https://api.jquery.com/show/)

Other advanced ideas:
	1. Set up the game to allow game boards of any size (4x4, 5x5, etc)
	2. Set up the game so that player 2 is "the computer" and plays automatically:
		Easy: randomly marks a square
		Harder: will try to win if possible
		Very Hard: --probably too hard -- min-max algorithm


*/


var pieceTypes = {
	blank : "-",
	X : "X",
	O : "O"
}

var player1 = pieceTypes.X;
var player2 = pieceTypes.O;

var currentPlayer = player1;

var currentPlayer = player2;

var gameSize = 9;  //9 squares (3x3 board)

//9 empty pieces to start
var board = 
	[
		pieceTypes.empty,pieceTypes.empty,pieceTypes.empty,
		pieceTypes.empty,pieceTypes.empty,pieceTypes.empty,
		pieceTypes.empty,pieceTypes.empty,pieceTypes.empty
	];


//TODO: make the board empty again
function resetBoardState(){

}
/*TODO: change the player after they've placed a piece */
function changeTurns(){
	/* doing nothing currently */
}
/*TODO: returns a true/ false value indicating whether there is a piece in this spot. */
function isSquareOccupied(piece){
	return true;
}
/*TODO:  returns a true / false value indicating whether a player has won */
function checkForWin(board){
	return false;
}

function promptWinner(player){
	alert(player + " has won!");
}



function placePiece(index,player){
	board[index] = player;
	$("#square" + index).text(player);
	console.log("Placed an " + player + " at index " + index);
	changeTurns();
}
/*TODO: check to see if this is a valid move to place before doing anything. currentValue should contain what is currently in the box*/
function onSquareClicked(element){
	var squareData = getSquareDataForElement(element.currentTarget);
	console.log(squareData);
	placePiece(squareData.index,currentPlayer);

}


function getSquareDataForElement(element){
	
	//assuming the first element
	var pressedSquare = $(element).attr('id'); //"square0"
	var indexOfTheWordSquare = pressedSquare.indexOf("square"); //should be 0
	var lengthOfWordSquare = "square".length; //6

	var pressedSquareNumber = pressedSquare.substr(indexOfTheWordSquare+lengthOfWordSquare); //get the characters that are after the word square, should be "0"
	var squareIndex = parseInt(pressedSquareNumber); //convert the string "0" into a number
	
	return {
		"index" : squareIndex,
		"currentValue" : $(element).text().trim()
	};
}

//TODO: attach the reset button and check for win buttons (https://api.jquery.com/click/)
function attachClickEvents(){
	//attach the board click events
	for (var i = 0; i < gameSize; i++){
		$("#square" + i).click(onSquareClicked);
	}
	

}

//wait for jquery to load before doing jquery things, or it won't work!
$(document).ready(function() {
	attachClickEvents();
});