const input = '1 + (2 * 3) + (4 * (5 + 6))'.replace(/\s/g, '')

const regexp = new RegExp(/\(\d+(?:\+|\*)\d+\)/g)
let results = []
while ((results = regexp.exec(input)) != null) {
    console.log(results);
}