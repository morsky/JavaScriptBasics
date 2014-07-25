// Write a JavaScript function findPalindromes(value) that extracts from a given text all palindromes,
// e.g. "ABBA", "lamal", "exe". Write JS program palindromesExtract.js that invokes your function with
// the sample input data below and prints the output at the console.

function findPalindromes(input) {
	var text = input.toLowerCase().split(/[\W+]/);
	var palindromes = false;
	var result = [];
	var length;

	text = text.filter(Boolean); //Remove empty element from array
	length = text.length;

	for (var i = 0; i < length; i++) {

		if (text[i].length == 1) {

			result.push(text[i]);

		} else {

			for (var j = 0; j < Math.floor(text[i].length / 2); j++) {

				if (text[i][j] == text[i][text[i].length - 1 - j]) {

					palindromes = true;

				} else {

					palindromes = false;
					break;
				}
			}

			if (palindromes) {

				result.push(text[i]);
			}
		}
	}

	return result.join(', ');
}

console.log(findPalindromes('There is a man, his name was Bob.'));