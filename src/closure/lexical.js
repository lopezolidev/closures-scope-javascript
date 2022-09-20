const global = 0;

function firstFunction() {
    const outter = 1;
    console.log(global);

    function secondFunction() { // a function inside another function, here's a closure
        const inner = 2;
        console.log(outter, global);

        function thirdFunction() { // another closure
            console.log(inner, outter, global);
        }
        return thirdFunction();
    }
    return secondFunction();
}

firstFunction();
// 0
// 1 0
// 2 1 0

// A closure means access to the scope of an outter function from the scope of an inner function. Lets you use an outter value from a inside scope
// Lexical scope means the range of accessibility of a variable. Following scopes chain. Meaning a variable can be accessed from an inner scope to an outter scope, but not the opposite. 