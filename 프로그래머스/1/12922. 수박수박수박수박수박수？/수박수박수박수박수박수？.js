function solution(n) {
    var arr = ''
    for(var a = 1; a <= n; a++){
        (a % 2 == 1)? arr += '수' : arr += '박'
    }
    return arr
}