 let prompt = require('prompt-sync')();

let result ='';
var num1= parseInt(prompt('Enter a first number: '));
var num2 = parseInt(prompt('Enter a second number: '));
var operator=(prompt('Enter operator "+" ,"-","*","/": '));

if(operator =="+"){
    sum =(num1 + num2);
    
}

else if(operator == "-"){
    sum =(num1-num2);
}

else if(operator == "*"){
    sum =(num1 * num2);
}
else if(operator =="/"){
    sum = (num1 / num2);
}
console.log(`${num1} ${operator} ${num2} = ${sum}`);
