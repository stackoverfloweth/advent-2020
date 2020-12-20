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

//w = z = y = x
const cycles = [[[input.map(x => x.split(''))]]]

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

    for (let w = -1; w < lastCycle.length + 1; w++) {
        nextCycle.push([])

        for (let z = -1; z < lastCycle[0].length + 1; z++) {
            nextCycle[w + 1].push([])

            for (let y = -1; y < lastCycle[0][0].length + 1; y++) {
                nextCycle[w + 1][z + 1].push([])

                for (let x = -1; x < lastCycle[0][0][0].length + 1; x++) {
                    const point = { w, x, y, z }
                    const cell = getCell(lastCycle, point)
                    const report = getAdjacentReport(lastCycle, point).filter(r => r.active)

                    if (cell.active && report.length >= 2 && report.length <= 3) {
                        nextCycle[w + 1][z + 1][y + 1].push("#")
                    } else if (!cell.active && report.length == 3) {
                        nextCycle[w + 1][z + 1][y + 1].push("#")
                    } else {
                        nextCycle[w + 1][z + 1][y + 1].push(".")
                    }
                }
            }
        }
    }

    cycles.push(nextCycle)
}

function getAdjacentReport(cycle, point) {
    const report = []

    for (let w = point.w - 1; w <= point.w + 1; w++) {
        for (let z = point.z - 1; z <= point.z + 1; z++) {
            for (let y = point.y - 1; y <= point.y + 1; y++) {
                for (let x = point.x - 1; x <= point.x + 1; x++) {
                    if (w == point.w && z == point.z && y == point.y && x == point.x) {
                        continue
                    }

                    const cell = getCell(cycle, { w, x, y, z })

                    report.push(cell)
                }
            }
        }
    }

    return report
}

function getCell(cycle, { w, x, y, z }) {
    try {
        return { w, x, y, z, active: cycle[w][z][y][x] === "#" }
    } catch (e) {
        return { w, x, y, z, active: false }
    }
}

function mostRecentCycle() {
    return cycles[cycles.length - 1]
}