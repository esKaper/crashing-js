// loops

var ary = [1,2,3,5,9];

for (var i = 0; i < ary.length; i++) {
	console.log("ary[" + i + "] = " + ary[i]); // ary[0] = 1;
}

var i = 0;
while (i < ary.length) {
	console.log("ary[" + i + "] = " + ary[i]);
	i++;
}

class BoyFriend {
}


var katie = {
	name: "Katie", 
	age: 21,
	sex: true,
	sayHello: function() {
		console.log("My name is Katie!");
	},
	boyfriend: new BoyFriend()
};

var str = "name";

katie[str];

for (var key in katie) {
	console.log("key: " + key + katie[key]);	
}
