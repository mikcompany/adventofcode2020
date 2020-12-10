import fs from 'fs'

// Part 1
fs.readFile('assets/map.txt', 'utf-8', (err, data) => {
    if (err) throw err

    const rows = data.split('\n')
    let map = rows.map(row => row.split(''))
    
    let positionInLine = 0
    let trees = 0
    for (const line of map) {
        if (line[positionInLine] === '#') {
            trees++
        }
        positionInLine = (positionInLine + 3) % line.length
    }

    console.log('No. Trees: ', trees)

})