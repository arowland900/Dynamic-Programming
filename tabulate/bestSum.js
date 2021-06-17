function bestSum(target, numbers) {
  let table = Array(target + 1).fill(null)
  table[0] = []

  for (let i = 0; i < target; i++) {
    if (table[i]) {
      for (let num of numbers) {
        let combo = [...table[i], num]
        if (!table[num + i] || combo.length < table[num + i].length) {
          table[num + i] = combo
        }
      }
    }
  }
  return table[target]
}

