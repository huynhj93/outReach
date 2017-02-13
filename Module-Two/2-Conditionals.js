// 1. Write a function named smallOrBig that takes in a number. If that number 
//    is less than 10, return 'the number is small'. if that number is between 10 and 100, 
//    return 'the number is medium', else you should 
//    return, 'the number is big'
var smallMedOrLarge = function(num) {
	if (num < 10) {
		return 'the number is small';
	} else if(num < 100) {
		return 'the number is medium';
	} else {
		return 'the number is large';
	}
}