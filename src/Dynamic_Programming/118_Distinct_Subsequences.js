/*
Given a string S and a string T, count the number of distinct subsequences of S which equals T.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

Example 1:

Input: S = "rabbbit", T = "rabbit"
Output: 3
Explanation:

As shown below, there are 3 ways you can generate "rabbit" from S.
(The caret symbol ^ means the chosen letters)

rabbbit
^^^^ ^^
rabbbit
^^ ^^^^
rabbbit
^^^ ^^^
Example 2:

Input: S = "babgbag", T = "bag"
Output: 5
Explanation:

As shown below, there are 5 ways you can generate "bag" from S.
(The caret symbol ^ means the chosen letters)

babgbag
^^ ^
babgbag
^^    ^
babgbag
^    ^^
babgbag
  ^  ^^
babgbag
    ^^^
**/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

 /**
i from S and j from T
f[i][j]: 第一个sequence的前i个数字/字符 配上 第二个sequence的前j个字符
function： A[i] === B[j]  => f[i][j] = f[i-1][j] + f[i-1][j-1]
			A[i] !== B[j] => f[i][j] = f[i-1][j]
initiale: f[0][j] = 0, f[i][0] = 1
answer: f[A.length][B.length]
 */
var numDistinct = function(s, t) {
    if(!s.length || !t.length){
    	return 0;
    }

    const n = s.length, m = t.length;
    const dp = [];

    for(let i = 0; i <= n; i++){
    	const temp = new Array(m+1).fill(0);
    	temp[0] = 1;
    	dp.push(temp);
    }

    for(let i=1; i<=n; i++){
    	for(let j=1; j<=m; j++){
    		dp[i][j] = dp[i-1][j];
    		if(s[i-1] === t[j-1]){
    			dp[i][j] += dp[i-1][j-1];
    		}
    	}
    }

    return dp[n][m];
};
















