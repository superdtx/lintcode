/*
Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

Example 1:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true
Example 2:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */

/*
f[i][j]: s1的前i个数字/字符 配上 s2的前j个字符
function： f[i][j] if s1[i] = s3[i+j-2] then f[i-1][j]
					else if s2[j] = s3[i+j-2] then f[i][j-1]
					else false

initiale: f[i][0] = s3[i] ?     f[0][j] = s3[j] ?
answer: f[A.length][B.length]
*/ 
var isInterleave = function(s1, s2, s3) {
    if(s1.length + s2.length !== s3.length){
    	return false;
    }

    const l1 = s1.length, l2 = s2.length, l3 = s3.length;
    const dp = [];

    for(let i = 0; i <= l1; i++){
    	const temp = new Array(l2+1).fill(false);
    	dp.push(temp);
    }

    //Initialization
    dp[0][0] = true;

    for(let i = 1; i <= l2; i++){
    	s2[i-1] === s3[i-1] && (dp[0][i] = dp[0][i-1]);
    }

    for(let i = 1; i <= l1; i++){
    	s1[i-1] === s3[i-1] && (dp[i][0] = dp[i-1][0]);
    }

    for(let i = 1; i <= l1; i++){
    	for(let j = 1; j <=l2; j++){
    		if(s1[i-1] === s3[i+j-1]){
    			dp[i][j] = dp[i-1][j];
    		} 
            
            if (s2[j-1] === s3[i+j-1]){
    			dp[i][j] = dp[i][j] || dp[i][j-1];
    		}
    	}
    }

    return dp[l1][l2];
};