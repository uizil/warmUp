// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.

function createClassMate(firstName, lastName, nationality, age) {
	var classMate = {
		firstName: firstName,
		lastName: lastName,
		nationality: nationality,
		age: age;
	}
}	

var classMates = [
	{firstName: 'Mohamed', lastName:'Amine', nationality: 'Tunisian', age: 20, gender: 'male'},
	{firstName: 'Hashem', lastName:'Buzer', nationality: 'libyan', age: 20, gender: 'male'},
]
function displayFriend(mate) {
	return mate.firstName + ' ' + mate.lastName;
}
function addFriend(mate) {
	classMates.push(mate)
}
function nbOfMale(array) {
	var count = 0;
	for(var i = 0; i < array.length; i++) {
		if(array[i].gender === 'male') {
			count ++;
		}
	}
	return count
}


function searchMates(query, array) {
	for(var i = 0; i < array.length; i++) {
		for(var key in array[i]) {
			if(query === array[i][key]){
				return array[i];
			}
		}
	}
}