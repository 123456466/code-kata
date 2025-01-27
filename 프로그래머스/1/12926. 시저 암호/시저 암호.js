function solution(s, n) {
    let seaser = ''
    for(let i = 0; i < s.length; i++){
        if(s[i] === ' '){
            seaser += ' '
        }else{
            let ascii = s[i].charCodeAt()
            if(90 < ascii + n && ascii <= 90){
                seaser += String.fromCharCode(ascii + n - 26)
            }else if(ascii < 97){
                seaser += String.fromCharCode(ascii + n)
            }else if(ascii + n > 122){
                seaser += String.fromCharCode(ascii + n - 26)
            }else{
                seaser += String.fromCharCode(ascii + n)
            }
        }
    }
    return seaser
}