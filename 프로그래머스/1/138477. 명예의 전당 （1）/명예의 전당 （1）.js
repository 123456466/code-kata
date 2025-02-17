function solution(k, score) {
    let a = [], r = []
    score.forEach((e) => {
        a.push(e)
        a.sort((n,m) => m-n)
        if(a.length < k){
            r.push(Math.min(...a))
        }else{
            a = a.slice(0,k)
            r.push(a[k - 1])
        }
    })
    return r
}