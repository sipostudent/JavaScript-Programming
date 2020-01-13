// Lesson 3: Objects with Functions

let myBook = {
    title: 'The BFG',
    author: 'Roald Dahl',
    pageCount: 199
}

let otherBook = {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    pageCount: 374
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge Area
// Create function - take fahrenheit in  - return object  with all three
// Objects as Function Return Values

let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celsius: (fahrenheit  -32) * (5 / 9),
    }
}

let temps = convertFahrenheit(74)
console.log(temps)
