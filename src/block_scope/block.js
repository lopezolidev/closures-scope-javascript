function fruits() {
    if (true) {
        var fruit1 = 'Apple'; //function scope
        let fruit2 = 'Peach'; //block scope
        const fruit3 = 'Orange'; //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();
//Apple
//ReferenceError: fruit2 is not defined