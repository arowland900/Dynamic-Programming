function canSum(target, numbers) {
    let table = Array(target + 1).fill(false)
    table[0] = true

    for (let i = 0; i < target; i++) {
        if (table[i]) {
            for (let num of numbers) {
                table[num + i] = true
            }
        }
    }
    return table
}

// Time Complexity: O(mn)
// Space Complexity: O(m)