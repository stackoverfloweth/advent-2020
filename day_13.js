const arrival = 1005526 //939
const sample = [7, 13, 'x', 'x', 59, 'x', 31, 19]
const input = [37, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 41, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 587, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 13, 19, 'x', 'x', 'x', 23, 'x', 'x', 'x', 'x', 'x', 29, 'x', 733, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 17]
const parsed = input.map(bus => isNaN(bus) ? bus : Math.floor(arrival / bus) * bus + bus)
const min = parsed.reduce((min, wait, index) => min == null || wait < min.wait ? { wait, index } : min, null)

console.log((min.wait - arrival) * input[min.index])