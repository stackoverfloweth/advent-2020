//const input = [16,10,15,5,1,11,7,19,6,12,4]
//const input = [28,33,18,42,31,14,46,20,48,47,24,23,49,45,19,38,39,11,1,32,25,35,8,17,7,9,4,2,34,10,3,]
const input = [2,49,78,116,143,42,142,87,132,86,67,44,136,82,125,1,108,123,46,37,137,148,106,121,10,64,165,17,102,156,22,117,31,38,24,69,131,144,162,63,171,153,90,9,107,79,7,55,138,34,52,77,152,3,158,100,45,129,130,135,23,93,96,103,124,95,8,62,39,118,164,172,75,122,20,145,14,112,61,43,141,30,85,101,151,29,113,94,68,58,76,97,28,111,128,21,11,163,161,4,168,157,27,72,]

// add socket
const socket = 0
input.push(socket)

// add your device
const device = max(input) + 3
input.push(device)

const sorted = input
    .reduce((obj, step) => {
        obj[step] = {
            sum: 0,
            steps: calculatePossibleNextSteps(step)
        }

        return obj
    }, {})
const keys = Object.keys(sorted).sort((a, b) => b-a)
traverse(0)
console.log(sorted)
console.log(sorted[socket].sum)

function max(arr){
    return arr.reduce((max, x) => x > max ? x : max, 0)
}

function sum(arr){
    return arr.reduce((sum, x) => sum += x, 0)
}

function calculatePossibleNextSteps(target){
    return input.filter(x => x - target <= 3 && x - target >= 1)
}

function traverse(index){
    const key = sorted[keys[index]]
    if(!key){
        return
    }

    if(key.steps.length == 0){
        key.sum = 1
    }else{
        key.sum = key.steps.reduce((sum, x) => sum + sorted[x].sum, 0)
    }

    // const childRoutes = key.steps.reduce((sum, x) => { 
    //     return traverse(x)
    // }, 0)

    traverse(++index)
}