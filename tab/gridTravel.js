function gridTraveler(m,n){
    let table = Array(m+1)
    .fill()
    .map(() => Array(n+1).fill(0))

    table[1][1] = 1

    for(let i = 0; i <= m; i++){
        for(let j = 0; j <= n; j++){
            let cur = table[i][j]
            if(i < m) table[i+1][j] = cur
            if(j < n) table[i][j+1] = cur
        }
    }

    return table[m][n]
}

