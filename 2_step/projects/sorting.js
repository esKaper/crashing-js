/* Flexible sorting example
 * Task: learn how to create a sorting function that takes in an array
 * and function as parameter.
 * You will be provided with the sorting algorithm and will
 *
*/


function cmp(a, b) {
	return b - a;
}

function bubbleSort(ary, comparator) {
    // Tell the user to properly use the function and return if ary is undefined
	if (ary == null) {
		console.log("You have to pass in an array as first argument!");
		return;
	}

	comparator = comparator || cmp; /* Create default comparator here */

	var temp;
	for (var i = 0; i < ary.length; i++) {
		for (var j = 0; j < ary.length-1; j++) {

			var res = comparator(ary[j], ary[j + 1]);   // Compute comparator and store the result in 'res'

			/* Sorting logic, ignore this */
			if (res < 0) {
				// swap nums
				temp = ary[j];
				ary[j] = ary[j+1];
				ary[j+1] = temp;
			}
		}
	}
	return ary;
}


// test your code here
var a = [1,9,0,5,2,7];
bubbleSort(a);
console.log(a);

bubbleSort(a, (a, b) => { return a - b; });
console.log(a);



// Needed for testing:
module.exports.sort = bubbleSort;
