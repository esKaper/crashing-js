// single-line comment
/*
 * multiline comment
 */

// variable declaration
var a = 5, // number
    b = "string", //, 'string', `a = `
    c = 45.23E+52, // scientific notation
    d = 12.23, // float
    e = true, // boolean
    ary = [1, 4, true, "a string"],
    obj = {key: b};


// Strings
// with double quotes:
var str = "string";
// with single quotes:
str = 'string';
// with backticks
str = `string`;
// String interpolation (ES6):
// Works only with backtics: ``
str = `old str -> ${str}`;

// Objects
var o = {
    key: "value",
    name: function() {
        return "Bob";
    }
};

o.key; // "value"
o["key"]; // "value"

o.key
 .toUpperCase()
 .split("");

// call function
o.name(1,2,3);
function fun(a, b, c) {
    console.log(`${a}, ${b}, ${c}`);
    // the same with other notation
    //console.log(a + ", " + b + ", " + c);
    //console.log(a, ",", b, ",", c);
}

fun(1, 2, 3) // 1, 2, 3
fun(1, 2) // 1, 2, undefined
fun(); // undefined, undefined, undefined
