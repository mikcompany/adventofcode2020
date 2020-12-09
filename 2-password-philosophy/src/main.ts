import fs from 'fs'

fs.readFile('assets/password-policies.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    const rows = data.split('\n')

    let validNumberOfPasswords = 0
    for (const row of rows) {
        let [policy, password] = row.split(':')
        password = password.trim()
        const [limits, character] = policy.split(' ')
        const [minString, maxString] = limits.split('-')
        const min = Number(minString)
        const max = Number(maxString)
        

        const numberOfCharacters = password.split('').reduce((accumulator, current) => {
            if (current === character) {
                return accumulator + 1
            }
            return accumulator
        } , 0)


        if (numberOfCharacters >= min && numberOfCharacters <= max) {
            validNumberOfPasswords++
        }

    }

    console.log("Valid passowords: ", validNumberOfPasswords)

})