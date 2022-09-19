var a; //declaring
var b = 'b'; //declaring and assigning = initializing
b = 'bb'; //reassigning
var a = 'a'; //redclaring and assigning = re-initializing

// Global scope

var fruit = 'Orange';

console.log(fruit);

function fruits() {
    console.log(fruit); 
    // variable fruit is accessed inside a function and displayed with no problems
}

fruits();
// Orange
// Orange

// ======== //

function countries() {
    country = 'Venezuela' 
    //when assinging a variable with no declaration, it has global scope by default
    console.log(country);
}

countries();
// Venezuela

console.log(country);
// Venezuela


