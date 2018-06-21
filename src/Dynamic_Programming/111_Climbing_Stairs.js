/*
111. Climbing Stairs
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example
Given an example n=3 , 1+1+1=2+1=1+2=3

return 3
*/

/**
 * @param n: An integer
 * @return: An integer
 */
const climbStairs = function (n) {
    if(n <= 1){
        return n;
    }
    
    const dp = new Array(n+1).fill(0);
    
    // step on nth step how many ways:
    // initialization
    dp[1] = 1;
    dp[2] = 2;
    
    for(let i = 3; i < n+1; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    return dp[n];
}

