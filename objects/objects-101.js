// Lesson 2: Object Basics

// Creating Objects

let myBook = {
    title: 'The BFG',
    author: 'Roald Dahl',
    pageCount: 199
}

// Dot Notation for Object Properties
console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'James and the Giant Peach'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge Area

let aboutMe = {
    name: 'Sipo',
    age: 34,
    location: 'Birmingham, UK'
}

console.log(`My name is ${aboutMe.name}, age is ${aboutMe.age}, and location is ${aboutMe.location}`)
aboutMe.age = aboutMe.age + 1
console.log(`My name is ${aboutMe.name}, age is ${aboutMe.age}, and location is ${aboutMe.location}`)