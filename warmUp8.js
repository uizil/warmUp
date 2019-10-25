//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false


function subset(array, sub) {
	var sub1 = []; 
	
	for(var i = 0; i < array.length; i++) {
		
		for (var j = 0; j < sub.length; j++){
			
			if(array[i] === sub[j]){
				sub1.push(1);
			}
		}
	}
	
	return sub1.length === sub.length;
}