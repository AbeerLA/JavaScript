let {addNumber, subNumber, mulNumber} = require('./arithmatic')

let number1 = 10
let number2 = 90



let result = addNumber(number1,number2)
console.log(`${number1} + ${number2} = ${result}`);


let result1 = subNumber(number1,number2)
console.log(`${number1} - ${number2} = ${result1}`);

let result2 = mulNumber(number1,number2)
console.log(`${number1} * ${number2} = ${result2}`);