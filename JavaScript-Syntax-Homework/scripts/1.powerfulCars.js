// Write a JavaScript function convertKWtoHP(value) to convert car’s kW into hp (horse power).
// Write a JS program powerfulCars.js that converts a few sample values to hp (see the examples below).
// The result should be printed on the console, rounded up to the second sign after the decimal point.
// Run the program through Node.js. 

function convertKWtoHP(kw) {
	var oneHorsePower = 0.745699872;
	var hp = kw / oneHorsePower.toFixed(3);

	return hp.toFixed(2);
}

console.log(convertKWtoHP(75));
console.log(convertKWtoHP(150));
console.log(convertKWtoHP(1000));