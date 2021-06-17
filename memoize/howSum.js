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

// After Memo:
// Time Complexity: O(n * m^2)
// Space Complexity: O(m^2)

// Before Memo:
// Time Complexity: O(m * n^m)
// Space Complexity: O(m)