// Lesson 11: Variable Scope: Part 2

// Global
    // local
        // Local
    // Local

// let name = 'Sipo'

if (true) {
    // let name = 'Cyrus'

    if (true) {
        let name = 'Charles'
        console.log(name)
    }
}

if (true) {
    console.log(name)
}