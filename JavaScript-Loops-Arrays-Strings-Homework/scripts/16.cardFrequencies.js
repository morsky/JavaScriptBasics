// Write a JavaScript function findCardFrequency(value) that that accepts the following parameters: array of
// several cards (face + suit), separated by a space. The function calculates and prints at the console the 
// frequency of each card face in format "card_face -> frequency". The frequency is calculated by the formula
// appearances / N and is expressed in percentages with exactly 2 digits after the decimal point. The card 
// faces with their frequency should be printed in the order of the card face's first appearance in the input.
// The same card can appear multiple times in the input, but its face should be listed only once in the output.
// Write JS program cardFrequencies.js that invokes your function with the sample input data below and prints
// the output at the console.

function findCardFrequency(input) {
	var pattern = /\W+/;
	var result = [];
	var text;
	var countOfCards;

	text = input.split(pattern);
	text = text.filter(Boolean);
	countOfCards = text.length;

	for (var card in text) {
		
		if (text[card] in result) {

			result[text[card]]++;

		} else {

			result[text[card]] = 1;
		}
	}

	var resultString = '';
	var percent = 100 / countOfCards;

	for (var item in result) {
	
		resultString += item + ' -> ' + (result[item] * percent).toFixed(2) + '% \n';

	}

	return resultString;
}

console.log(findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦'));
console.log(findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠'));
console.log(findCardFrequency('10♣ 10♥'));