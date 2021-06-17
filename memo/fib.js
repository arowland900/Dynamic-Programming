function fib(n, memo={}){
    if(memo[n]) return memo[n]
    if(n < 2) return 1
    memo[n] = fib(n-1) + fib(n-2)
    return memo[n]
}

// After Memo:
// Time Complexity: O(n)
// Space Complexity: O(n)

// Before Memo:
// Time Complexity: O(2^n)
// Space Complexity: O(n)