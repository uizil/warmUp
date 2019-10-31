/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */
function mysteryRange(string, range) {
	var i = 0;
	var array = [];
	var result = [];

	while(i < string.length) {
		var int = 0;

		if(parseInt(string[i], 10) < range) {

			if(parseInt(string[i] + parseInt(string[i + 1], 10), 10) > range + 10) {

				int = parseInt(string[i] , 10)
				i += 1;
			} else {
				int = parseInt(string[i] + parseInt(string[i + 1], 10), 10)
				i += 2;
			}
		} else {
			i ++;
		}

		array.push(int)
	}

	var min = array[0];
	var max = array[0];

	for (var i = 1; i < array.length; i++) {
		if(min > array[i]) {
			min = array[i]
		}
	}

	for (var i = 1; i < array.length; i++) {
		if(max < array[i]) {
			max = array[i]
		}
	}

	result.push(min);
	result.push(max);
	return result;
}