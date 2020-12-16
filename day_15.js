const sample = [0, 3, 6]
const input = [0, 14, 6, 20, 1, 4]
const history = new Map()
let lastNumber = input.shift()
let index = 1

while (index < 30000000) {
    const nextNumber = getNextNumber()
    history.set(lastNumber, index++)

    lastNumber = nextNumber
}

console.log(lastNumber)

function getNextNumber() {
    if (input.length) {
        return input.shift()
    }

    if (!history.has(lastNumber)) {
        return 0
    }

    return index - history.get(lastNumber)
}