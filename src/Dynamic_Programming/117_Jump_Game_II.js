/*
117. Jump Game II
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

Example
Given array A = [2,3,1,1,4]

The minimum number of jumps to reach the last index is 2. (Jump 1 step from index 0 to 1, then 3 steps to the last index.)
*/
/**
 * @param A: A list of integers
 * @return: An integer
 */
const jump = function (A) {
    
    const len = A.length;
    const dp = new Array(len).fill(Number.MAX_VALUE);
    dp[0] = 0;

    for(let i = 1; i < len; i++){
        for(let j = 0; j < i; j++){
            if(dp[j] !== Number.MAX_VALUE && A[j] >= i - j){
                dp[i] = Math.min(dp[i], dp[j]+1);
            }
        }
    }
    
    return dp[len-1];
};

