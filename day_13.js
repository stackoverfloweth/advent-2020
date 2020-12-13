const sample = [7, 13, 'x', 'x', 59, 'x', 31, 19]
const input = [37, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 41, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 587, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 13, 19, 'x', 'x', 'x', 23, 'x', 'x', 'x', 'x', 'x', 29, 'x', 733, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 17]
const computed = sample.reduce((reduced, x) => ({ ...reduced, [x]: [x] }), {})

console.log(1068781 % 7)
console.log((1068781 + 1) % 13)
console.log((1068781 + 4) % 59)
console.log((1068781 + 6) % 31)
console.log((1068781 + 7) % 19)

while (!setComplete()) {
    sample.forEach(x => {
        if (x != 'x') {
            const last = computed[x][computed[x].length - 1]
            computed[x].push(last + x)
        }
    })
    console.log(computed)
}

function setComplete() {
    const targetTime = computed[sample[0]][computed[sample[0]].length - 1]
    return sample.every((x, index) => x == 'x' || x + index == targetTime)
}