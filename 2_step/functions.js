// Notes for functions in JS

// function declaration
function someFunction() {
    // some cool stuff
}

var anotherFunction = function() {
    // some more cool stuff
}

var o = {
    yetAnotherFunction: function(a,b) {
    }
};

// calling a function
// without params:
someFunction(5, false);


// Default parameters:
function deFunc(a, b) {
    a = a || 0;
    b = b || 0;
    return a + b;
}

// ES6 Arrow Functions
// Another convenient way to declare a function
var f = () => {
    // do something here
};


function a(callback) {
    // something here
    console.log("I am a");

    callback();
}

function b() {
    console.log("I am b");
}

a(b);


// closure
function root() {
    var c = 5;
    function inner() {
        return c++;
    }
    return {
        inner: inner
    };
}

// nested function
function outter() {
    // something
    function inner() {
        // something here
    }
    inner();
}

var innerFromOut = root();
innerFromOut.inner(); // 5
innerFromOut.inner(); // 6
innerFromOut.inner(); // 7
innerFromOut.c; // fails, there is no c


// how to immediately call a function
(function x(i) {
    console.log("printing " + i);
})(5);
