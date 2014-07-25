// Write a JavaScript function checkBrackets(value) to check if in a given expression the brackets are put
// correctly. Write JS program bracketsChecker.js that invokes your function with the sample input data below
// and prints the output at the console.

function checkBrackets(input) {
	var length = input.length;
	var openBracket = 0;
	var closeBracket = 0;

	for (var i = 0; i < length; i++) {
		
		if (input[i] == '(') {

			openBracket += 1;

		} else if (input[i] == ')') {

			closeBracket += 1;
		}

		if (closeBracket > openBracket) {

			break;
		}
	}

	if (openBracket == closeBracket) {

		return 'correct';

	} else {

		return 'incorrect';
	}
}

console.log(checkBrackets('( ( a + b ) / 5 – d )'));
console.log(checkBrackets(') ( a + b ) )'));
console.log(checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));