// 1. Create a function called range that takes two arguments, start and end, and
//    returns an array containing all numbers from start to end. For example, range(3,8)
//    returns [3,4,5,6,7,8];

var range = function(start,end) {
	var arr = [];
	for (var i = start; i <= end; i++) {
		arr.push(i)
	}
	return arr;
}

//2. Create a function sumArray that takes an array of numbers and returns the sum of these numbers.

var sumArray = function(arr) {
	return arr.reduce(function(accum,item){
		return accum+=item;
	})
}

//3. Create an object called bunny. Give the bunny a property called color with a value of 'white',
//   a property called eyeColor with a value of 'black', a property called diet with a value of
//   'carrots'
var bunny = {};
bunny.color = 'white';
bunny.eyeColor = 'black';
bunny.diet = 'carrots';

//4. Iterate though the numbers object and add 5 to each value;

var numbers = {
	num1: 1,
	num2: 2,
	num3: 3,
}

for (var key in numbers) {
	numbers[key] += 5;
}