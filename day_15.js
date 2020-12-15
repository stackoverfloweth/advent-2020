const starting = [0,3,6]
const history = {}
let lastNumber = null
let index = 0

while(index < 5){
    const nextNumber = getNextNumber()

    console.log(nextNumber, history)

    history[nextNumber].push(nextNumber)
    lastNumber = nextNumber
    index++
}

function getNextNumber(){
    if(starting.length){
        const nextNumber = starting.shift()
        history[nextNumber] = []
        return nextNumber
    }

    if(history[lastNumber] == undefined){
        history[lastNumber] = []
        return 0
    }

    return history[lastNumber][history[lastNumber] - 1] - history[lastNumber][history[lastNumber] - 2]
}