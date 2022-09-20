function greeting() {
    let userName = 'Chalo'; 
    //variable declared with let, inside a function, therefore function scope
    console.log(userName);

    if (userName === 'Chalo') {  //comparing value and type with "==="
        console.log(`Hello ${userName}!`); //accessing a variable inside a conditional (a block);

    }
}

greeting();
        //Chalo
        //Hello Chalo!

console.log(userName);
        //ReferenceError: userName is not defined

