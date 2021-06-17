function bestSum(target, numbers, memo = {}) {
    if (target in memo) return memo[target]
    if (!target) return []
    if (target < 0) return null

    let best = null

    for (let num of numbers) {
        let rem = target - num
        let remRes = bestSum(rem, numbers, memo)
        if (remRes) {
            let newCombo = [...remRes, num]
            if (!best || best.length > newCombo.length) best = newCombo
        }
    }

    memo[target] = best
    return best
}

// After Memo:
// Time Complexity: O(n * m^2)
// Space Complexity: O(m^2)

// Before Memo:
// Time Complexity: O(n^m * m)
// Space Complexity: O(m^2)




