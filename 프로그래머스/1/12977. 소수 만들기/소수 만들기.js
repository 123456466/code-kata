function solution(nums) {
    let a = [], numsLenght = nums.length
    for(let i = 0; i < numsLenght - 2; i++){
        for(let n = i + 1; n < numsLenght -1; n++){
            for(let m = n + 1; m < numsLenght; m++){
                a.push(nums[i] + nums[n] + nums[m])
            }
        }
    }
    let acase = a.filter((e)=> {
        for(let i = 2; i < e; i++){
            if(e % i === 0){
                return false;
            }
        }
        return true;
    })
    return acase.length
}