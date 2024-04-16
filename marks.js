let prompt = require('prompt-sync')();

for(i=0; i<3; i++){
    const name = prompt("Enter the name:  ");



let avarage;
let sum;
let mark;
let status;
const mark1 = parseInt (prompt("Enter mark 1: "));
const mark2 = parseInt (prompt("Enter mark 2: "));
const mark3 = parseInt (prompt("Enter mark 3: "));

sum = mark1 + mark2 + mark3;
avarage =(mark1 + mark2 + mark3)/3;

if(avarage <50){
    status= "Fail";
}
else if(avarage >=50 && avarage <75){
    status = "Pass";

}
else if(avarage >=75 && avarage<100){
    status = "Pass with distinction";
}
else if(avarage>100){
    status = "check your input";
}
console.log(`${name} your final mark is ${avarage}  ${status}`);
}