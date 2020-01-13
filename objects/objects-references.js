// Lesson 4: Object References

// Both logs print the same exact thing
let myAccount = {
    name: 'Sipo Charles',
    expenses: 0,
    income: 0
   }

    let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
    console.log(account)
   }
   
   addExpense(myAccount, 2000)
   console.log(myAccount)