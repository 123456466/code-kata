function solution(n) {
    let three = n.toString(3)
    let re = String(three).split('').reverse().join('')
    return parseInt(re,3)
}