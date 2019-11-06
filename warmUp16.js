// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.
function ballon(string) {
	// body...
	var count = 0;
	object = { b:0, a:0, l:0, o:0, n:0	}

	for(var i = 0; i <string.length; i++){
		if(string[i] === 'b') {
			object.b += 1;
		} else if(string[i] === 'a') {
			object.a += 1;
		} else if(string[i] === 'l') {
			object.l += 1;
		} else if(string[i] === 'o') {
			object.o += 1;
		} else if(string[i] === 'n') {
			object.n += 1;
		}
	}
	while(object.b > 0 && object.a > 0 && object.l > 0 && object.n > 0 && object.o > 0) {
		if(object.b >= 1 && object.a >= 1 && object.l >= 2 && object.o >= 2 && object.n >= 1) {
			count += 1;
			object.b -= 1;
			object.a -= 1;
			object.l -= 2;
			object.o -= 2;
			object.n -= 1;
		}
		
	}
	return  count;
}