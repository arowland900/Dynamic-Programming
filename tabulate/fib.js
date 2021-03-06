function fib(n){
    let res = Array(n+1).fill(0)
    res[1] = 1
    for(let i = 1; i < n; i++){
        table[i+1] += table[i]
        table[i+2] += table[i]
    }
    return table[n]
}

// Time Complexity: O(n)
// Space Complexity: O(n)