const errands = ['Grocery shopping', 'Gym time', 'Phone a friend', 'Cook dinner', 'Watch Netflix']

errands.splice(2, 1)
errands.push('Buy coffee')
errands.shift()

console.log(`You have ${errands.length} errands!`)

errands.forEach(function (errands, index) {
    const num = index + 1
    console.log(`${num}. ${errands}`)
})

// 1. The first item
// 2. The second item
