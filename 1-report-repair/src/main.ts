import fs from 'fs'

fs.readFile('assets/expense-report.txt', 'utf-8', (err, expenses) => {
    if (err) throw err

    const expensesList = expenses.split('\n').map(Number)

    // Part 1
    for (const expense of expensesList) {
        const correctExpense = expensesList.find(e => 2020-expense-e === 0)
        
        if (correctExpense) {
            console.log(`Part 1 answer: ${correctExpense * expense}`)
            break
        }
    }

    // Part 2 O(nˆ3)
    let combinationFound = false
    for (let i = 0; i < expensesList.length; i++) {
        for (let j = 0; j < expensesList.length; j++) {
            for (let k = 0; k < expensesList.length; k++) {
                if (expensesList[i] + expensesList[j] + expensesList[k] === 2020) {
                    console.log(`Part 2 answer: ${expensesList[i] * expensesList[j] * expensesList[k]}`)
                    combinationFound = true
                }
                if (combinationFound) break
            }
            if (combinationFound) break
        }
        if (combinationFound) break
    }
})