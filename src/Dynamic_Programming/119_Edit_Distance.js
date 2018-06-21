/*
Given two words word1 and word2, find the minimum number of steps required to convert word1 to word2. (each operation is counted as 1 step.)

You have the following 3 operations permitted on a word:

Insert a character
Delete a character
Replace a character
Example
Given word1 = "mart" and word2 = "karma", return 3.
*/

/**
 * @param word1: A string
 * @param word2: A string
 * @return: The minimum number of steps.
 */

/**
state: f[i][j]a的前i个字符“配上”b的前j个字符最少要用几次编辑使得他们相等
function: A[i] === B[j] ==> f[i][j]=Min(f[i-1][j-1], f[i][j-1]+1, f[i-1][j]+1)
			A[i] !== B[j] ==> f[i][j]=Min(f[i-1][j-1], f[i][j-1], f[i-1][j])+1
intialize: f[i][0] = i, f[0][j] = j
answer: f[a.length()][b.length()]
 */

const minDistance = function (word1, word2) {
	if(!word1.length || !word2.length){
		return word1.length || word2.length
	}

	const w1 = word1.length, w2 = word2.length;
	const dp = [];

	for(let i = 0; i <= w2; i++){
		const temp = new Array(w1+1).fill(0);
		dp.push(temp);
	}

	for(let i = 0; i <= w1; i++){
		dp[0][i] = i;
	}

	for(let i = 0; i <= w2; i++){
		dp[i][0] = i;
	}

	for(let i = 1; i <= w1; i++){
		for(let j = 1; j <= w2; j++){
			if(word1[i-1] === word2[j-1]){
				dp[i][j] = Math.min(dp[i-1][j-1], dp[i][j-1]+1, dp[i-1][j]+1);
			} else {
				dp[i][j] = Math.min(dp[i-1][j-1], dp[i][j-1], dp[i-1][j]) + 1;
			}
		}
	}

	return dp[w2+1][w1+1];
}

