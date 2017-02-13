// 1. Write a function called log20 that console logs
//    the numbers 1 2 3 4 ... up to 20.

var log20 = function () {
	for (var i = 1; i < 21; i++) {
		console.log(i);
	}
}

// invoke log20 here and check your console to see if you did it correctly

// 2. Write a function called sum that takes in a number called num,
//    and sums up 1 + 2 + 3 + 4 + ... + num. For example, sum(6) should return 1 + 2 + 3 + 4 + 5 + 6

var sum = function (num) {
	var accum = 0;
	for (var i = 1; i <= num; i++) {
		accum+= i;
	}
	return accum;
}

//3. Refactor log20 to use a while loop instead.
//4. Refactor sum to use a while loop instead.

// 5. Use the break keyword (along with a conditional) somewhere in the following code 
//    so that the loop only console logs 5 times. Do not alter line 30. 

var log5 = function () {				//Check your console to see if you did it correctly
	for (var i = 0; i < 100; i++) {
		console.log('hello');
	}
}

//6. Use the continue keyword somewhere in the following code so that the code console logs every number
//   in the loop except 5. Do not alter line 39.

var log10 = function () {				//Check your console if you did it correctly
	for (var i = 0; i < 10; i++) {
		console.log(i);
	}
}

//7. Write a loop that makes seven calls to console.log to output the following triangle on line 47 to 53:
/*

#
##
###
####
#####
######
#######

*/

//Hint: You're going to need the newline char, a variable representing a string, 
//      and to use string concatenation.


//8. Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
//   For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 
//   (and not 3), print "Buzz" instead. When you have that working, modify your program to 
//   print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" 
//   for numbers divisible by only one of those).

//   Hint: You need to use the Modulo Operator. If you want to check if a number is divisble by 3 for 
//         example, then you'd check if(number % 3 === 0){//the number is divisible by 3}.

 