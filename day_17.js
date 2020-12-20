// const input = [
//     '.#.',
//     '..#',
//     '###',
// ]
const input = [
    '#####...',
    '.#..##..',
    '##.##.##',
    '...####.',
    '#.#...##',
    '.##...#.',
    '.#.#.###',
    '#.#.#..#',
]

//z = y = x
const cycles = [[input.map(x => x.split(''))]]

execute();
execute();
execute();
execute();
execute();
execute();
console.log(JSON.stringify(mostRecentCycle()).match(/\#/g).length)

function execute() {
    const lastCycle = mostRecentCycle()
    const nextCycle = []

    for (let z = -1; z < lastCycle.length + 1; z++) {
        nextCycle.push([])

        for (let y = -1; y < lastCycle[0].length + 1; y++) {
            nextCycle[z + 1].push([])

            for (let x = -1; x < lastCycle[0][0].length + 1; x++) {
                const point = { x, y, z }
                const cell = getCell(lastCycle, point)
                const report = getAdjacentReport(lastCycle, point).filter(x => x.active)

                if (cell.active && report.length >= 2 && report.length <= 3) {
                    nextCycle[z + 1][y + 1].push("#")
                } else if (!cell.active && report.length == 3) {
                    nextCycle[z + 1][y + 1].push("#")
                } else {
                    nextCycle[z + 1][y + 1].push(".")
                }
            }
        }
    }

    cycles.push(nextCycle)
}

function getAdjacentReport(cycle, point) {
    const report = []

    for (let z = point.z - 1; z <= point.z + 1; z++) {
        for (let y = point.y - 1; y <= point.y + 1; y++) {
            for (let x = point.x - 1; x <= point.x + 1; x++) {
                if (z == point.z && y == point.y && x == point.x) {
                    continue
                }

                const cell = getCell(cycle, { x, y, z })

                report.push(cell)
            }
        }
    }

    return report
}

function getCell(cycle, { x, y, z }) {
    try {
        return { x, y, z, active: cycle[z][y][x] === "#" }
    } catch (e) {
        return { x, y, z, active: false }
    }
}

function mostRecentCycle() {
    return cycles[cycles.length - 1]
}