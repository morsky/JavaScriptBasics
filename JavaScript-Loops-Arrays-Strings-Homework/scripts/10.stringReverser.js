// Write a JavaScript function reverseString(value) that reverses string and returns it. Write JS program 
// stringReverser.js that invokes your function with the sample input data below and prints the output at 
// the console.

function reverseString(input) {
	var length = input.length;
	var result = '';

	for (var i = 0; i < length; i++) {
		result += input[input.length - 1 - i];	
	}

	return result;
}

console.log(reverseString('sample'));
console.log(reverseString('softUni'));
console.log(reverseString('java script'));