function solution(strings, n) {
    var arr = strings.sort()
    return arr.sort((a,b) =>
        a[n].charCodeAt() - b[n].charCodeAt())
}