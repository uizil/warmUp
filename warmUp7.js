// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here
var partnerFirstName = 'Dhia';
var partnerSecondName  = 'Weslati'
var partnerFullName = partnerFirstName + ' ' + partnerSecondName;

var multiple = (13 % 3 === 0);

var arrayOfAges = [13,14,13,15,16,17,19,13,16,15];
var averageAges = 0;
for(var i = 0; i <arrayOfAges.length; i++) {
	averageAges += arrayOfAges[i];
}
averageAges = averageAges / arrayOfAges.length;

var myAgeInSeconds = 19 * 365 * 24 * 60 * 60;
