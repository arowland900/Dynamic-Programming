function howSum(target, numbers, memo = {}) {
    if (target in memo) return memo[target]
    if (!target) return []
    if (target < 0) return null

    let best = null

    for (let num of numbers) {
        let rem = target - num
        let remRes = howSum(rem, numbers, memo)
        if (remRes) {
            let newCombo = [...remRes, num]
            if (!best || best.length > newCombo.length) best = newCombo
        }
    }

    memo[target] = best
    return best
}




