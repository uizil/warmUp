// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o0l2l3e4h"
function reverseStr(str) {
  var result = '';
  var count = str.length - 1;
  var i = 0;
  
  while (i < str.length){
    result = str[i] + count + result ;
    count --;
	i++;
  }

  return result;
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
function samelength (array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
	for (var j = i + 1; j < array.length; j++){
	  if (array[i].length === array[j].length){
	    result.push(array[i]);
	    result.push(array[j]);
	  }
	}
  }
  return result;
}