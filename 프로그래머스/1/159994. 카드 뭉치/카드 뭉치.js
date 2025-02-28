function solution(cards1, cards2, goal) {
    let word1 = 0, word2 = 0
    for(let i = 0; i < goal.length; i++){
        if(goal[i] === cards1[word1]){
            word1 += 1
        }else if(goal[i] === cards2[word2]){
            word2 += 1
        }else{
            return "No"
        }
    }
    return "Yes"
}