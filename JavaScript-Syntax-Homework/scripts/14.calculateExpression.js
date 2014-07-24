// Write a HTML page (with text field, button, and paragraph). Write JS program calcExpression.js that
// calculates any expression put in the text field and prints it in the paragraph. Link the JS file to
// the HTML file. (100% accuracy is not required).

var action = document.getElementById('send');
action.addEventListener('click', main, false);

function main() {
	var userInput = document.getElementById('input').value;
	var convertedInput = '';
	var result = '';
	var calculateExpression;

	while(true) {

		if (userInput == '' || userInput == null) {
			userInput = prompt('Please enter an expression.');
			continue;
		}

		convertedInput = firstCheck(userInput);
		convertedInput = removeMultipleSigns(convertedInput);

		if (userInput.length == convertedInput.length) {
			break;
		} else {
			calculateExpression = prompt('Your input was converted to: \n' + convertedInput +
					'\n' +
					'To continue press Cancel \n' +
					'or enter new expression end press Ok', convertedInput);

			userInput = calculateExpression;
			document.getElementById('input').value = convertedInput;

			if (userInput == null) {
				break;
			} else {
				continue;
			}			
		}
	}

	result = calcualte(convertedInput);

	document.getElementById('result').innerHTML = result;
}

//Get form input only numbers (0-9), signs (+, -, * , /) and decimal point (.)
function firstCheck(input) {	
	var length = input.length;	
	var pattern = /[0-9+\-*\/]/;	//regular expresion to select numbers and
	var firstPass = '';

	for (var i = 0; i < length; i++) {
		
		if (input[i].match(pattern)) {
			firstPass += input[i];
		}
	}

	return firstPass;
}

//Remove signs that appear one after another. Keep first one and remove other.
function removeMultipleSigns(input) {
	var length = input.length;
	var sign = false;
	var pattern = /[+\-*\/]/;
	var secondPass = '';
	var firstElement;
	var lastElement;

	for (var i = 0; i < length; i++) {

		if (input[i].match(pattern)) {
			
			if (sign) {				
				continue;
			} else {
				secondPass += input[i];
				sign = true;
				continue;
			}
		
		} else {
			sign = false;
		}
	
		secondPass += input[i];		
	}

	firstElement = secondPass[0];
	lastElement = secondPass[secondPass.length - 1];

	//Only minus signa (-) and decimal point (.) are allowed i the begining of the expression
	if (firstElement.match(/[+*\/]/)) {
		secondPass = secondPass.replace(secondPass[0], '');
	}

	//Remove any sign left at the end of the expression
	if (lastElement.match(pattern)) {
		// secondPass = secondPass.replace(secondPass.substring(secondPass.length - 1), '');
		secondPass = secondPass.substring(0, secondPass.length - 1);	
	}

	return secondPass;
}

function calcualte(input) {
	var result = eval(input);

	return result;
}