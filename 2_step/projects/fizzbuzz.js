/* The task is to create a FizzBuzz Game
 * You take in 3 parameters: count, fizz, buzz
 * The task is to:
 * 1. Loop through all the numbers from 1 to 'count'
 * 2. Make the program print out the following:
	- if number is divisible by fizz, print out "Fizz"
	- if number is divisible by buzz, print out "Buzz"
	- if number is divisible by fizz and by buzz, print out "FizzBuzz"
	- if not divisible by fizz and buzz, just print out the number
 * 3. We suppose that count is always bigger or equal to one
 *
 * TIP: Store the output in an Array and use array.join() to join all values into a string
*/

// TODO: Add code here
function fizzBuzz(count, fizz, buzz) {
	// rock on!
	var ary = [];
	for (var i = 1; i <= count; i++) {
		if (i % fizz == 0 && i % buzz == 0) {
			ary.push("FizzBuzz");
		} else if (i % buzz == 0) {
			ary.push("Buzz");
		} else if (i % fizz == 0) {
			ary.push("Fizz");
		} else {
			ary.push(i);
		}
	}
	// remember to return the string below
	return ary.join(" ");
}

// test your code here
var result = fizzBuzz(20, 3, 5);
console.log("fizzBuzz(20, 3, 5): ", result);









// ignore, needed for test module
module.exports.fizzBuzz = fizzBuzz;
