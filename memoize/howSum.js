function howSum(target, numbers){
    if(!target) return []
    if(target < 0) return null
  
    for(let num of numbers){
      let rem = target - num
      let remRes = howSum(rem, numbers)
      if(remRes){
        return [...remRes, num]
      }
    }
  
    return null
  }