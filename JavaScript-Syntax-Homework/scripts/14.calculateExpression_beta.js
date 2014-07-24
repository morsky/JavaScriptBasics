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
		convertedInput = checkDots(convertedInput);
		convertedInput = removeMultipleSigns(convertedInput);
		convertedInput = removeZeroes(convertedInput);

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
				document.getElementById('input').innerHTML = 'hm....';
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
	var pattern = /[0-9.+\-*\/]/;	//regular expresion to select numbers, signs ans decimal point
	var firstPass = '';

	for (var i = 0; i < length; i++) {
		
		if (input[i].match(pattern)) {
			firstPass += input[i];
		}
	}

	return firstPass;
}

//Reduce decimal point to be only one between two signs
function checkDots(input) {
	var length = input.length;
	var dot = false;
	var pattern = /[+\-*\/]/;
	var secondPass = '';

	for (var i = 0; i < length; i++) {

		if (input[i] == '.') {
			
			if (dot) {				
				continue;
			} else {
				secondPass += input[i];
				dot = true;
				continue;
			}
		
		} else if (input[i].match(pattern)) {
			dot = false;
		}
	
		secondPass += input[i];		
	}

	//Remove decimal point at the end of expression
	if (secondPass[secondPass.length - 1] == '.') {
		secondPass = secondPass.substring(0, secondPass.length - 1);
	}

	return secondPass;
}

//Remove signs that appear one after another. Keep first one and remove other.
function removeMultipleSigns(input) {
	var length = input.length;
	var sign = false;
	var pattern = /[+\-*\/]/;
	var thirdPass = '';
	var firstElement;
	var lastElement;

	for (var i = 0; i < length; i++) {

		if (input[i].match(pattern)) {
			
			if (sign) {				
				continue;
			} else {
				thirdPass += input[i];
				sign = true;
				continue;
			}
		
		} else {
			sign = false;
		}
	
		thirdPass += input[i];		
	}

	firstElement = thirdPass[0];
	lastElement = thirdPass[thirdPass.length - 1];

	//Only minus signa (-) and decimal point (.) are allowed in the begining of the expression
	if (firstElement.match(/[+*\/\.]/)) {
		thirdPass = thirdPass.replace(thirdPass[0], '');
	}

	//Remove any sign left at the end of the expression
	if (lastElement.match(pattern)) {
		// thirdPass = thirdPass.replace(thirdPass.substring(thirdPass.length - 1), '');
		thirdPass = thirdPass.substring(0, thirdPass.length - 1);	
	}

	return thirdPass;
}

//Check for leading zeroes before decimal point. If found reduce them to only one.
function removeZeroes(input) {
	var pattern = /0+\./g;
	var result;

	result = input.replace(pattern, '0.');

	return result;
}

function calcualte(input) {
	var result = eval(input);

	return result;
}