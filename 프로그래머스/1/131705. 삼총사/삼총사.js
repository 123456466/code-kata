function solution(number) {
    if(number.length < 3){
        return 0
    }
    var n = 0, w = number.length;
    for (var f = 0; f < w - 2; f++){
        for(var s = f + 1; s < w - 1; s++){
            for(var t = s + 1; t < w; t++){
                (number[f]+number[s]+number[t] === 0)? n = n + 1 : null
            }
        }
    }
    return n
}