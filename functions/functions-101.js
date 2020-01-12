// Lesson 2: Function Basics

// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

// 1. Argument - the value passed into a function
let square = function (num) {
    // 2. Function Code - what goes inside the curly braces to define what the function does
    let result = num * num
    // 3. Return Value - part of the function code which lets you define what value to send back to the function caller
    return result
}


let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// Challenge Area

let convertFahrenheitToCelcius = function (fahrenheit) {
    let celsius = (fahrenheit -32) * 5/9
    return celsius
}

let tempOne = convertFahrenheitToCelcius(32)
let tempTwo = convertFahrenheitToCelcius(68)

console.log(tempOne)
console.log(tempTwo)