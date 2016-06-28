// Prototypes
// JS has no classes, it has Prototype-based objects

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.hobbies = [];

    this.greet = function(other) {
        console.log("Hey there, " + other + ". My name is " + name);
    }
}

var me = new Person("Katie", 21);
me.greet("Kristian"); // -> "Hey there, Kristian. My name is Katie"


Person.prototype.getANewHobby = function(hobbyName) {
    this.hobbies.push(hobbyName);
};

Person.prototype.showHobbies = function() {
    console.log("My hobbies are: " + this.hobbies.join(", "));
};

me.getANewHobby("Skiing");
me.getANewHobby("Coding");
me.showHobbies(); // My hobbies are: Skiing, Coding


// Create objects to store 'classes'
var Workers = {};
var Visitors = {};

Workers.Person = function() {
    // a worker type of person
    this.sayBye = function() {
        console.log("Bye");
    }

    this.hobbies = [];

    this.getANewHobby = function(hobbyName) {
        this.hobbies.push(hobbyName);
    }
}

// millions of lines of code...

// extend later with prototype keyword
Workers.Person.prototype.sayHello = function() {
    console.log("hello");
}

Visitors.Person = function() {
    // another type of person
}

var bob = new Workers.Person();
var fred = new Visitors.Person();

bob.eat();



// ES6 (ECMAScript 6) Classes
// They are actually turned into standard prototype notation at run-time
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    sayHello(other) {
        console.log("Hello there, " + other + ". My name is " + this.name)
    }
}
