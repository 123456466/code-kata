function solution(t, p) {
    let tl = t.length, pl = p.length, n = 0
    for(let i = 0; i < tl - pl + 1; i++){
        (t.slice(i,i+pl) <= p)? n += 1 : null
    }
    return n
}