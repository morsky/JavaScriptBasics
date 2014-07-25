// Write a JavaScript function findMostFreqWord(value) that finds the most frequent word in a text and prints
// it, as well as how many times it appears in format "word -> count". Consider any non-letter character as
// a word separator. Ignore the character casing. If several words have the same maximal frequency, print 
// all of them in alphabetical order. Write JS program frequentWord.js that invokes your function with the 
// sample input data below and prints the output at the console.

function findMostFreqWord(input) {
	var wordsToSearch = input.toLowerCase().split(/\W+/);
	var result = [];
	var counter = 0;
	var length;

	wordsToSearch.sort();
	wordsToSearch = wordsToSearch.filter(Boolean);
	length = wordsToSearch.length;


	
	for (var word in wordsToSearch) {

		if (wordsToSearch[word] in result) {

			result[wordsToSearch[word]]++;

		} else {

			result[wordsToSearch[word]] = 1;

		}

		if (counter < result[wordsToSearch[word]]) {

			counter = result[wordsToSearch[word]];

		}
	}

	var resultString = '';

	for (var word in result) {
		
		if (result[word] === counter) {
			
			resultString += word + ' -> ' + result[word] + '\n';
		}
	}

	return resultString;
}

console.log(findMostFreqWord('in the middle of the night'));
console.log(findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.'));
console.log(findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.'));