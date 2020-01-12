// Lesson 5: Function Scope

// Global scope (convertFahrenheitToCelcius, tempOne, tempTwo)
    // Local scope (fahrenheit, celcius)

let convertFahrenheitToCelcius = function (fahrenheit) {
    let celsius = (fahrenheit -32) * 5/9

    if (celsius <= 0) {
        let isFreezing = true
    }

    return celsius
}

let tempOne = convertFahrenheitToCelcius(32)
let tempTwo = convertFahrenheitToCelcius(68)

console.log(tempOne)
console.log(tempTwo)