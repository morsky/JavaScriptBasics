/*Write a JavaScript function fixCasing(value) that accepts a text as a parameter. The function must change 
*the text in all regions as follows:
*	<upcase>text</upcase> to uppercase
*	<lowcase>text</lowcase> to lowercase
*	<mixcase>text</mixcase> to mixed casing (randomly)
*Write JS program caseFixer.js that invokes your function with the sample input data below and prints the 
*output at the console.*/

function fixCasing(input) {
	var result;
	var result2;
	var upcase = /<upcase>([^<]*)<\/upcase>/g;
	var lowcase = /<lowcase>([^<]*)<\/lowcase>/g;
	var mixcase = /<mixcase>([^<]*)<\/mixcase>/g;

	result = input.replace(upcase, function() { 
		return arguments[1].toUpperCase()
	});

	result = result.replace(lowcase, function() { 
		return arguments[1].toLowerCase()
	});

	result = result.replace(mixcase, mixCase);

	return result;
}

function mixCase() {
	var input = arguments[1];
	var text = '';

	for (var i = 0; i < input.length; i++) {
		var random = Math.floor(Math.random() * 2);
	
		switch(random) {
			case 0: text += input[i].toUpperCase(); break;
			case 1: text += input[i].toLowerCase(); break;
		}
	}

	return text;

}

console.log(fixCasing("We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>." +
						" We <mixcase>don't</mixcase> have <lowcase>ANYTHING</lowcase> else."));