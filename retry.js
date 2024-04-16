let prompt = require('prompt-sync')();

let result = '';
var num1 =parseInt(prompt("Enter the first number: "));
var num2 =parseInt(prompt("Enter the first number: "));
const operator =(prompt("enter the operator + ,  -, * , /: "))

if(operator == "+"){
    result =(num1 + num2);
}

else if(operator == "-"){
    result = (num1 -num2);
}

else if(operator == "*"){
    result = (num1 * num2);
}

else if(operator == "/"){
    result = (num1 / num2);
}

console.log(`${num1} ${operator} ${num2} = ${result} `);
