function solution(a, b, n) {
    let coke = 0
    for(let vin = n; vin >= a;){
        coke = coke + (Math.floor(vin / a) * b)
        vin = (Math.floor(vin / a) * b) + vin % a
    }
    return coke
}