// Write a JavaScript function compareChars(value) that compares two arrays of chars lexicographically
// (letter by letter). Write JS program charComparer.js that invokes your function with the sample input 
// data below and prints the output at the console.

function compareChars(firstInput, secondInput) {
	var lengthFirstArray = firstInput.length;
	var lengthSecondArray = secondInput.length;

	if (lengthFirstArray != lengthSecondArray) {
		
		return 'Not Equal';

	} else {
		
		for (var i = 0; i < lengthFirstArray; i++) {
			
			if (firstInput[i] != secondInput[i]) {

				return 'Not Equal';
				break;

			} else {

				return 'Equal';
			}
		}
	}
}

console.log(compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], 
							['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']));
console.log(compareChars(['3', '5', 'g', 'd'], 
							['5', '3', 'g', 'd']));
console.log(compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'], 
							['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']));
