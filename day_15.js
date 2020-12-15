const sample = [0, 3, 6]
const input = [0, 14, 6, 20, 1, 4]
const history = input.slice(0, -1).reduce((reduced, x) => ({ ...reduced, [x]: [] }), {})
let lastNumber = input.shift()
let index = 1

while (index < 2020) {
    const nextNumber = getNextNumber()
    history[lastNumber].push(index++)
    lastNumber = nextNumber
}

console.log(lastNumber)

function getNextNumber() {
    if (input.length) {
        return input.shift()
    }

    if (history[lastNumber] == undefined) {
        history[lastNumber] = []
        return 0
    }

    return index - history[lastNumber][history[lastNumber].length - 1]
}