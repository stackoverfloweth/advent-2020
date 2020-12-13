const sample = [7, 13, 'x', 'x', 59, 'x', 31, 19]
const input = [37, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 41, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 587, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 13, 19, 'x', 'x', 'x', 23, 'x', 'x', 'x', 'x', 'x', 29, 'x', 733, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 17]

// console.log(1068781 % 7)
// console.log((1068781 + 1) % 13)
// console.log((1068781 + 4) % 59)
// console.log((1068781 + 6) % 31)
// console.log((1068781 + 7) % 19)

let time = Math.floor(100000000000000 / input[0]) * input[0]
while (!setComplete(time)) {
    time += input[0]
}
console.log(time)

function setComplete(time) {
    return input.every((x, index) => x === 'x' || (time + index) % x === 0)
}