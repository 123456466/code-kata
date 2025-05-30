function solution(number, limit, power) {
    let answer = 0;
    for(let i = 1; i <= number; i++){
        let a = 0;
        for(let n = 1; n <= Math.sqrt(i) ; n++){
            if(i % n == 0){
                a += 1
                if (n !== i / n){
                    a += 1
                }
            }
        }
        if(a > limit){
            answer += power
        }else if(a <= limit){
            answer += a
        }
    }
    return answer
}