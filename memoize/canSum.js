function canSum(target, numbers, memo={}){
    if(target in memo) return memo[target]
    if(!target) return true
    if(target < 0) return false
  
    for(let num of numbers){
      let rem = target - num
      if(canSum(rem, numbers, memo)){
        memo[target] = true 
        return true
      }
    }
  
    memo[target] = false
    return false
  }

// After Memo:
// Time Complexity: O(n*m)
// Space Complexity: O(m)

// Before Memo:
// Time Complexity: O(n^m)
// Space Complexity: O(m)