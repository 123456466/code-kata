function solution(s) {
    var arr = ['zero','one','two','three','four','five','six','seven','eight','nine']
    if(isNaN(s)){
        for(var a = 0; a <= 9; a++){
            while(s.includes(arr[a])){
                s = s.replace(arr[a],a)
            }
        }
        return +s
    }else{
        return +s
    }
}