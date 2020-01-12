// Lesson 10: Variable Scope: Part 1

// Lexical Scope (Static Scope)
// Gloabl Scope - Defined outside of all code blocks
// Local Scope - Defined inside a code block

// In a Scope you can access variables defined in that scope, or in a parent/ancestor scope

// Global Scope (varOne)
    // Local Scope (varTwo)
        // Loca Scope (varThree)
    // Local Scope (varThree)

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if(true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree'
}

console.log(varTwo)