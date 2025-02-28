function solution(k, m, score) {
    score.sort((a,b) => {return b - a})
    let profit = 0
    for (let i = m - 1; i < score.length; i += m){
        profit += score[i]*m
    }
    return profit
}