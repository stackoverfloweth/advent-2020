const input = [
    '.#.',
    '..#',
    '###',
]

//z = y = x
const cycles = [[input.map(x => x.split(''))]]

execute();
console.log(mostRecentCycle())

function execute() {
    const lastCycle = mostRecentCycle()
    const nextCycle = []

    for (let z = -1; z < lastCycle.length + 1; z++) {
        nextCycle.push([])
        
        for (let y = -1; y < lastCycle[0].length + 1; y++) {
            nextCycle[z + 1].push([])

            for (let x = -1; x < lastCycle[0][0].length + 1; x++) {
                const point = {x,y,z}
                const cell = getCell(lastCycle, point)
                
                nextCycle[z + 1][y + 1].push(cell.active ? '#' : '.')
            }
        }
    }

    cycles.push(nextCycle)
}

function getCell(cycle, {x,y,z}){
    try {
        return {x, y, z, active: cycle[z][y][x] === "#"}
    }catch {
        return {x, y, z, active: false}
    }
}

function mostRecentCycle() {
    return cycles[cycles.length - 1]
}