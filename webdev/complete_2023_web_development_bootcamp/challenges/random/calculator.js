function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function calculator(num1, num2, operator){
    return operator(num1, num2);
}

console.log("Result of adding 4 and 7: " + calculator(4, 7, add));
console.log("Result of subtracting 4 and 7: " + calculator(4, 7, subtract));
console.log("Result of multiplying 4 and 7: " + calculator(4, 7, multiply));
console.log("Result of dividing 4 and 7: " + calculator(4, 7, divide));
