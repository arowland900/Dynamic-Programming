function howSum(target, numbers) {
    if (!target) return []
    if (target < 0) return null

    let best = null

    for (let num of numbers) {
        let rem = target - num
        let remRes = howSum(rem, numbers)
        if (remRes) {
            let newCombo = [...remRes, num]
            if (!best || best.length > newCombo.length) best = newCombo
        }
    }

    return best
}