function howSum(target, numbers) {
    let table = Array(target + 1).fill(null)
    table[0] = []

    for (let i = 0; i < target; i++) {
        if (table[i]) {
            for (let num of numbers) {
                table[num + i] = [...table[i], num]
            }
        }
    }
    return table[target]
}