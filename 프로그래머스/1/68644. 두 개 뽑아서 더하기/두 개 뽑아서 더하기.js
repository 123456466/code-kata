function solution(numbers) {
    let arr = []
    for(let i = 0; i < numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
            let a = numbers[i] + numbers[j]
            if(!arr.includes(a)){
                arr.push(a)
            }
        }
    }
    return arr.sort((a,b) => a - b)
}