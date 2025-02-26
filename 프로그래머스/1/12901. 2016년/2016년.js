function solution(a, b) {
    const week = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    let day = b % 7
    if (a === 1 || a === 4 || a === 7) {
        day += 4
    } else if (a === 2 || a === 8) {
        day = day
    } else if (a === 3 || a === 11){
        day += 1
    } else if (a === 5){
        day += 6
    } else if (a === 6) {
        day += 2
    } else if (a === 9 || a === 12){
        day += 3
    } else if (a === 10) {
        day += 5
    }
    if (day >= 7){
        day -= 7
    }
    return week[day]
}