/*
115. Unique Paths II
Follow up for "Unique Paths":

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

Example
For example,
There is one obstacle in the middle of a 3x3 grid as illustrated below.

[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
The total number of unique paths is 2.
*/

/**
 * @param obstacleGrid: A list of lists of integers
 * @return: An integer
 */
const uniquePathsWithObstacles = function (obstacleGrid) {
    if(!obstacleGrid || !obstacleGrid.length || !obstacleGrid[0].length){
        return 0;
    }
    
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const sum = [];
    
    for(let i = 0; i< m; i++){
        const temp = new Array(n).fill(0);
        sum.push(temp);
    }
    
    for(let i = 0; i < n; i++){
        if(obstacleGrid[0][i] !== 1){
            sum[0][i] = 1;
        } else {
            break;
        }
    }
    
    for(let i = 0; i < m; i++){
        if(obstacleGrid[i][0] !== 1){
            sum[i][0] = 1;
        } else {
            break;
        }
    }
    
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            if(obstacleGrid[i][j] === 1){
                sum[i][j] = 0;
            } else {
                sum[i][j] = sum[i-1][j] + sum[i][j-1]
            }
        }
    }
    
    return sum[m-1][n-1];
}

