const sample = [7, 13, 'x', 'x', 59, 'x', 31, 19]
const input = [37, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 41, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 587, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 13, 19, 'x', 'x', 'x', 23, 'x', 'x', 'x', 'x', 'x', 29, 'x', 733, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 17]

const max = input.reduce((reduced, x, index) => x != 'x' && x > reduced.max ? {index, max:x} : reduced, {index: 0, max: 0})
let time = Math.floor(100000000000000 / max.max) * max.max
while (!setComplete(time)) {
    time += max.max
    if(time % 10000000 == 0){
        console.log(time)
    }
}
console.log(time - max.index)

function setComplete(time) {
    return input.every((x, index) => x === 'x' || (time + index - max.index) % x === 0)
}