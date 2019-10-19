// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
<<<<<<< HEAD
//you can only add one at each summetion, you'll need to use recursion in this.
function gcd(num1, num2) {
	if (num1 % num2 === 0){
		return num2;
	}
	return gcd (num2, num1 % num2)
}
function sum(num1, num2) {
	if (num1 === 0){
		return num2;
	}
	return 1 + sum(num1 - 1, num2)
} 
=======
//you can only add one at each summetion, you'll need to use recursion in this.
>>>>>>> 5351c491bef905428a1af3ea57f32fb6874d8e38
