// Write a JavaScript function roundNumber(value) that rounds floating-point number using Math.round(),
// Math.floor(). Write a JS program roundingNumbers.js that rounds a few sample values. Run the program
// through Node.js.

function roundNumber(number) {
	var roundNumber = Math.round(number);
	var floorNumber = Math.floor(number);
	
	return console.log(roundNumber + "\n" + floorNumber);
}

console.log(roundNumber(22.7));
console.log(roundNumber(12.3));
console.log(roundNumber(58.7));