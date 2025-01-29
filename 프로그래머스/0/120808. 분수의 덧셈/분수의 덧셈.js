function solution(numer1, denom1, numer2, denom2) {
    var up = numer1*denom2+numer2*denom1 , down = denom1*denom2
    var a = Math.max(up,down) , b = Math.min(up,down)
    while (b != 0){
        let gcd = a%b
        a = b;
        b = gcd;
    }
    return [up/a,down/a]
}