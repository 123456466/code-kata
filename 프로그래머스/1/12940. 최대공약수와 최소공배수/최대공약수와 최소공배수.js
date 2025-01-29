function solution(n, m) {
    var a = Math.max(n,m), b = Math.min(n,m)
    while (b != 0){
        let i = a%b
        a = b;
        b = i;
    }
    return [a,n*m/a]
}