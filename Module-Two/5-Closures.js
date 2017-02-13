//1. Create a function called createCounter.
//   Inside the function body, create a variable called privateCount and initialize it to 0;
//   Create a function called changeBy that takes in a value, and increments the privateCounter by 
//   that value;
//   Finally, return an object with properties called "increment", "decrement", and "value".
//   Increment should be a function that calls changeBy(1), decremenent should be a function
//   that call changeBy(-1), and value should be a function that returns privateCounter;

var createCounter = function() {
	var privateCount = 0;
	function changeBy(value) {
		privateCount += value;
	}
	return {
		increment: function () {
			changeBy(1);
		},
		decrement: function () {
			changeBy(-1);
		},
		value: function () {
			return privateCounter;
		}
	};
}

var counter = createCounter();
//  Try console logging private variable out here. What do you get? How can we access
//  private counter? How can we change the value of privateCount? Can we change the value 
//  by 5 directly by calling changeBy? 