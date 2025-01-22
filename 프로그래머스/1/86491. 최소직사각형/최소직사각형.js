function solution(sizes) {
    let width = [], heigth = [];
    sizes.forEach((s) => {
        width.push(Math.max(...s));
        heigth.push(Math.min(...s))
    })
    return Math.max(...width) * Math.max(...heigth)
}