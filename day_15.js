const sample = [0, 3, 6]
const input = [0, 14, 6, 20, 1, 4]
const history = input.slice(0, -1).reduce((reduced, x) => ({ ...reduced, [x]: null }), {})
let lastNumber = input.shift()
let index = 1

while (index < 30000000) {
    const nextNumber = getNextNumber()
    history[lastNumber] = index++

    //console.log(nextNumber, history)

    lastNumber = nextNumber

    if (index % 10000 == 0) {
        console.log(index)
    }
}

console.log(lastNumber)

function getNextNumber() {
    if (input.length) {
        return input.shift()
    }

    if (history[lastNumber] == undefined) {
        history[lastNumber] = null
        return 0
    }

    //console.log(index, history[lastNumber][history[lastNumber].length - 1])

    return index - history[lastNumber]
}