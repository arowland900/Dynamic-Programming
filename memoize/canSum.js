function canSum(target, numbers) {
    if (!target) return true
    if (target < 0) return false

    for (let num of numbers) {
        let rem = target - num
        if (canSum(rem, numbers)) return true
    }

    return false
}