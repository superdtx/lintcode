/*
Description
Given two strings, find the longest common subsequence (LCS).

Your code should return the length of LCS.

Have you met this question in a real interview?  
Clarification
What's the definition of Longest Common Subsequence?

https://en.wikipedia.org/wiki/Longest_common_subsequence_problem
http://baike.baidu.com/view/2020307.htm
Example
For "ABCD" and "EDCA", the LCS is "A" (or "D", "C"), return 1.

For "ABCD" and "EACB", the LCS is "AC", return 2.
*/

/**
 * @param A: A string
 * @param B: B string
 * @return: The length of longest common subsequence of A and B
 */

/*
f[i][j]: 第一个sequence的前i个数字/字符 配上 第二个sequence的前j个字符
function： A[i] === B[j]  => f[i][j] = f[i-1][j-1] + 1
			A[i] !== B[j] => f[i][j] = Max(f[i-1][j], f[i][j-1])
initiale: f[i][0] = 0 f[0][j] = 0
answer: f[A.length][B.length]
*/
const longestCommonSubsequence = function (A, B) {
	if(!A.length || !B.length){
		return 0;
	}

	const a = A.length, b = B.length;
	const dp = [];

	for(let i = 0; i <= a; i++){
		const temp = new Array(b+1).fill(0);
		dp.push(temp);
	}

	for(let i = 1; i<=a; i++){
		for(let j = 1; j<=b; j++){
			if(A[i-1] === B[j-1]){
				dp[i][j] = dp[i-1][j-1] + 1;
				continue;
			}

			dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
		}
	}

	return dp[a][b];
}

/*
"abc"
"a"

"www.lintcode.com code"
"www.ninechapter.com code"
*/
