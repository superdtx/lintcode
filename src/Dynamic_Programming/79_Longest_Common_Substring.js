/*
Given two strings, find the longest common substring.

Return the length of it.

Example
Given A = "ABCD", B = "CBCE", return 2.

Challenge
O(n x m) time and memory.
*/

/**
 * @param A: A string
 * @param B: A string
 * @return: the length of the longest common substring.
 */

/*
state: f[i][j]表示前i个字符配上前j个字符的LCS的长度 以A[i]和以B[j]结尾
function: A[i] === B[j] f[i][j] = f[i-1][j-1] + 1
			A[i] !== B[j] f[i][j] = 0;  ???
initialize: f[1][0] = 0 f[0][1] = 0
result: Max(...f)
*/
const longestCommonSubstring = function(A, B) {
	if (!A.length || !B.length) {
		return 0;
	}

	const a = A.length,
		b = B.length,
		dp = [];

	for (let i = 0; i <= a; i++) {
		const temp = new Array(b + 1).fill(0);
		dp.push(temp);
	}

	for (let i = 1; i <= a; i++) {
		for (let j = 1; j <= b; j++) {
			if (A[i - 1] === B[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1] + 1;
				continue;
			}
			dp[i][j] = 0;
		}
	}

	let max = 0;
	for (let i = 1; i <= a; i++) {
		for (let j = 1; j <= b; j++) {
			max = Math.max(max, dp[i][j]);
		}
	}

	return max;
};
