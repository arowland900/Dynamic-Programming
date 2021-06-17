function howSum(target, numbers, memo = {}) {
    if (target in memo) return memo[target]
    if (!target) return []
    if (target < 0) return null

    for (let num of numbers) {
        let rem = target - num
        let remRes = howSum(rem, numbers, memo)
        if (remRes) {
            memo[target] = [...remRes, num]
            return memo[target]
        }
    }

    memo[target] = null
    return null
}