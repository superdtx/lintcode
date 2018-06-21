/*
116. Jump Game
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example
A = [2,3,1,1,4], return true.

A = [3,2,1,0,4], return false.
*/
/**
 * @param A: A list of integers
 * @return: A boolean
 */
const canJump = function (A) {
    
    if(A.length < 2) {
        return true;
    }
    
    const len = A.length;
    const dp = new Array(len).fill(false);
    dp[0] = true;
    
    for(let i = 1; i < len; i++){
        for(let j = 0; j < i; j++){
            if(!!dp[j] && A[j] >= i - j){
                dp[i] = true;
                break;
            }
        }
    }
    
    return dp[len - 1];
};
