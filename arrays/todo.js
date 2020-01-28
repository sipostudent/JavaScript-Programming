const errands = ['Grocery shopping', 'Gym time', 'Phone a friend', 'Cook dinner', 'Watch Netflix']

errands.splice(2, 1)
errands.push('Buy coffee')
errands.shift()

console.log(`You have ${errands.length} errands!`)
console.log(errands)
