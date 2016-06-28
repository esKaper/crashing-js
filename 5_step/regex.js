// Regular Expressions are a tool for String processing

// find if p is in string "alpha"
"alpha".match(/p/);
// find if p is between two lowercase characters
"alpha".match(/[a-z]p[a-z]/);
// find if there is one of many groups/characters
"alpha".match(/al|lp|ha/);
// Example: find if name is Kristian or Katie
var name = "Kristian";
name.match(/Kristian|Kate/);


// find if group or character is NOT in a string


// Quantifiers:
// specify amount:
"a".match(/a{1}/);
"aaa".match(/.+/);

// special values:
var string = /\w/; // the same as: [a-zA-Z]
var number = /\d/; // the same as: [0-9]
var whitespace = /\s/; // the same as: [ \t\n\r\b]

// capturing: reuse the already matched character
// EXAMPLE: a string should have the first character repeated at least once
"sadfxxlutz".match(/^(\w)\1+/);

// string ends with:
"google.com".match(/\.com$/);
