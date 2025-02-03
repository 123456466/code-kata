function solution(s) {
    let arr = []
    for(let i = 0; i < s.length; i++){
        let ss = s.slice(0,i)
        if(ss.includes(s[i])){
            arr.push(i - ss.lastIndexOf(s[i]))
        }else{
            arr.push(-1)
        }
    }
    return arr
}