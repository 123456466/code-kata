function solution(answers) {
    const a = [1,2,3,4,5], b = [2,1,2,3,2,4,2,5], c = [3,3,1,1,2,2,4,4,5,5]
    let as = 0, bs = 0, cs = 0;
    answers.forEach((qa,i) => {
        let aa = i % a.length, ba = i % b.length, ca = i % c.length;
        if(qa === a[aa]){
            as += 1
        }
        if(qa === b[ba]){
            bs += 1
        }
        if(qa === c[ca]){
            cs += 1
        }
    })
    let max = Math.max(as,bs,cs), win = []
    if(as == max){
        win.push(1)
    }
    if(bs == max){
        win.push(2)
    }
    if(cs == max){
        win.push(3)
    }
    return win
}