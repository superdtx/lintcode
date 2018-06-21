/*
110. Minimum Path Sum
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
*/

/**
 * @param grid: a list of lists of integers
 * @return: An integer, minimizes the sum of all numbers along its path
 */
const minPathSum = function (grid) {
    if(!grid || !grid.length || !grid[0].length){
        return 0;
    }
    
    const m = grid.length;
    const n = grid[0].length;
    const sum = [];

    for(let i = 0; i < m; i++){
        const temp = new Array(n).fill(0);
        sum.push(temp);
    }

    sum[0][0] = grid[0][0];
    
    // initialization of edges
    for(let i = 1; i < n; i++){
        sum[0][i] = sum[0][i-1] + grid[0][i];
    }

    for(let i = 1; i < m; i++){
        sum[i][0] = sum[i-1][0] + grid[i][0];
    }

    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            sum[i][j] = grid[i][j] + Math.min(sum[i-1][j], sum[i][j-1]);
        }
    }
    
    return sum[m-1][n-1];
}

