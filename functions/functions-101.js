// Lesson 2: Function Basics

// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
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