// Var

var name; // declaring
name = 'Javier' //assigning
console.log(name); //Javier

var lastName = 'Lopez' // declaring and assigning
console.log(lastName); // Lopez
lastName = 'Olivera';
console.log(lastName); // Olivera

var userName = 'SJLO'; // declaring and assigning
var userName = 'JEOP'; // redeclargin and reassigning
console.log(userName); // JEOP

// Let
 let fruit = 'Apple'; // declaring and assigning
 console.log(fruit); //  Apple
 
 fruit = 'Orange'; // reassigning
 console.log(fruit); // Orange

let fruit = 'Mango'; //SyntaxError: Identifier 'fruit' has already been declared
console.log(fruit);


// Const

const animal = 'dog' // declaring and assigning
animal = 'cat'; //TypeError: Assignment to constant variable.
console.log(animal); 

const animal = 'shark' //SyntaxError: Identifier 'animal' has already been declared
console.log(animal);

// Const with data structures

const array = []; // declaring and assigning
array.push('element 1'); // mutating array
console.log(array); // [ 'element 1' ]

array.pop(); // mutating array
console.log(array); // []

const object = {  //declaring and assigning
    x: 1,
    y: 2,
}
console.log(object); // { x: 1, y: 2 } 

object.y = 3; // mutating object
console.log(object); // { x: 1, y: 3 }

// data structures declared using const have no issues when mutating their values