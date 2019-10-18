// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
var females = ['ons', 'lina', 'henia'];
// -name of males in your class
var males = ['amine', 'ahmed', 'taha']
// -name of your class instructors 
var instructors = ['youssef', 'seif', 'matt']
// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
var middle = function(array) {
  var x = array.length - 1
  if (x / 2 === 1) {
	  return array[x / 2]
  }else{
    return array[Math.floor(x / 2)]
  }
}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
var x2 = function(array) {
  for(var i = 0; i < array.length; i += 2){
    array[i] *= 2;
  }
  return array;
}