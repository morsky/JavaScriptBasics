// Write a JavaScript function variablesTypes(value) that accepts the following parameters:
// name, age, isMale (true or false), array of your favorite foods. The function must return
// the values of the variables and their types.

function variablesTypes(value) {
	var name = value[0];
	var age = value[1];
	var isMale = value[2];
	var favoriteFood = value[3];

	return ('"My name: ' + name + ' //type is ' + typeof name + '\n' +
			'My age: ' + age + ' // type is ' + typeof age + '\n' +
			'I am a male: ' + isMale + ' //type is ' + typeof isMale + '\n' +
			'My favorite foods are: ' + favoriteFood + ' //type is ' + typeof favoriteFood + '"');
}

console.log(variablesTypes(['Pesho', 22, true, ['fries', 'banana', 'cake']]));