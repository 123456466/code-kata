function solution(s) {
    let n = 0 , st = ""
    for(let i = 0; i < s.length; i++){
        if(n % 2 == 0){
            st = st + s[i].toUpperCase();
            (s[i] == ' ')? n = 0 : n = n + 1
        }else{
            st = st + s[i].toLowerCase();
            (s[i] == ' ')? n = 0 : n = n + 1
        }
    }
    return st
}