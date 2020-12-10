import fs from 'fs'

fs.readFile('assets/password-policies.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    const rows = data.split('\n')

    // Part 1
    let part1validNumberOfPasswords = 0
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
            part1validNumberOfPasswords++
        }

    }
    console.log("Part1 Valid passwords: ", part1validNumberOfPasswords)

    // Part 2
    let part2validNumberOfPasswords = 0
    for (const row of rows) {
        let [policy, password] = row.split(':')
        password = password.trim()
        const [limits, character] = policy.split(' ')
        const [pos1String, pos2String] = limits.split('-')
        const pos1 = Number(pos1String)
        const pos2 = Number(pos2String)

        let pos1Valid = password[pos1-1] === character
        let pos2Valid = password[pos2-1] === character
        
        if (pos1Valid) {
            if (!pos2Valid) {
                part2validNumberOfPasswords++
            }
        }

        if (pos2Valid) {
            if (!pos1Valid) {
                part2validNumberOfPasswords++
            }
        }
    }
    console.log('Part2 Valid passwords: ', part2validNumberOfPasswords)
})