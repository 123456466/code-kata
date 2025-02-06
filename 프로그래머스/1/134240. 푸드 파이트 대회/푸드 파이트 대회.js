function solution(food) {
    let f = '', d = ''
    for(let i = 1; i < food.length; i++){
        if(!(food[i] === 1)){
            f += String(i).repeat(Math.floor(food[i]/2))
        }
    }
    return f + '0' + f.split("").reverse().join("")
}