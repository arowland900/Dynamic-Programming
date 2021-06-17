function gridTraveler(m, n, memo={}) {
    let k = `${m},${n}`

    if(k in memo) return memo[k]
    if (!m || !n) return 0
    if (m == 1 & n == 1) return 1

    
    memo[k] = gridTraveler(m - 1, n) + gridTraveler(m, n - 1)
    return memo[k]
}

// After Memo:
// Time Complexity: O(m * n)
// Space Complexity: O(n+m)

// Before Memo:
// Time Complexity: O(2^(m+n))
// Space Complexity: O(n+m)