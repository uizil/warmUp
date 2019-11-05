// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

function reverse(string) {
	var words = '';
	result = '';
			var i = string.length - 1;
			var j = string.length - 1;
		 	while (i >= 0){
		 		while (string[j] !== ' ') {
					words = string[j] + words
					j--;
				}
				if (string[j] === ' ') {
					j = i;
				}
				result = words + ' ' +result;

				
		 		i -= 1;
		 	}
		
		

	return result;
}