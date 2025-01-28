function solution(array, commands) {
    let correct = []
    commands.forEach((ijk) => {
        let i = ijk[0], j = ijk[1], k = ijk[2];
        if(i === j){
            return correct.push(array[i -1])
        }else{
            let arr = array.slice(i -1,j).sort((a,b) => a - b)
            return correct.push(arr[k - 1])
        }
    })
    return correct
}