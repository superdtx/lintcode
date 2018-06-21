/*
A robot is located at the top-left corner of a m x n grid.

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid.

How many possible unique paths are there?

Example
Given m = 3 and n = 3, return 6.
Given m = 4 and n = 5, return 35.
*/

/**
 * @param m: positive integer (1 <= m <= 100)
 * @param n: positive integer (1 <= n <= 100)
 * @return: An integer
 */
const uniquePaths = function (m, n) {
    
    const sum = [];
    
    for(let i = 0; i < m; i++){
        const temp = new Array(n).fill(0);
        sum.push(temp);
    }
    
    for(let i = 0; i < n; i++){
        sum[0][i] = 1;
    }
    
    for(let i = 0; i < m; i++){
        sum[i][0] = 1;
    }
    
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            sum[i][j] = sum[i-1][j] + sum[i][j-1];
        }
    }
    
    return sum[m-1][n-1];
};

