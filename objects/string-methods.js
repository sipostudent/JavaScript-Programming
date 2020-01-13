let name = ' Sipo Charles  '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

let password = 'abc123asdf098'

// Includes method
console.log(password.includes('password'))

// Trim
console.log(name.trim())


// Challenge Area

// isValidPassword
let isValidPassword = function (password) {
    password.length > 8 && password.includes('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@$%^&'))
console.log(isValidPassword('asdfpasdfpoijpasword'))
