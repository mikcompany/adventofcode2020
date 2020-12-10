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

// Part 2

function trees(map: string[][], right: number, down: number): number {
    let positionInLine = 0
    let currentLine = 0
    let trees = 0

    while (currentLine < map.length) {
        if (map[currentLine][positionInLine] === '#') {
            trees++
        }  
        positionInLine = (positionInLine + right) % map[currentLine].length
        currentLine += down
    }

    return trees
}

fs.readFile('assets/map.txt', 'utf-8', (err, data) => {
    if (err) throw err

    const rows = data.split('\n')
    let map = rows.map(row => row.split(''))
    
    const s1 = trees(map, 1, 1)
    const s2 = trees(map, 3, 1)
    const s3 = trees(map, 5, 1)
    const s4 = trees(map, 7, 1)
    const s5 = trees(map, 1, 2)

    console.log('Trees multiplied: ', s1*s2*s3*s4*s5)
})