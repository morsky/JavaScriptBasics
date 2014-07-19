// Write a JavaScript function convertDigitToWord(value) that prints the name of an integer number
// n (0<n<10) in English using switch statement. Write JS program digitAsWord.js that prints a few
// digits on the console. Run the program through Node.js.

function convertDigitToWord(number) {
	switch(number) {
		case 1: return 'one'; break;
		case 2: return 'two'; break;
		case 3: return 'three'; break;
		case 4: return 'four'; break;
		case 5: return 'five'; break;
		case 6: return 'six'; break;
		case 7: return 'seven'; break;
		case 8: return 'eight'; break;
		case 9: return 'nine'; break;
		default: return 'Wrong number'; break;
	}
}

console.log(convertDigitToWord(8));
console.log(convertDigitToWord(3));
console.log(convertDigitToWord(5));