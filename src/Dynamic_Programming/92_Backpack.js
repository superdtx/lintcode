/*
Description
Given n items with size Ai, an integer m denotes the size of a backpack. How full you can fill this backpack?

You can not divide any item into small pieces.


Example
If we have 4 items with size [2, 3, 5, 7], the backpack size is 11, we can select [2, 3, 5], so that the max size we can fill this backpack is 10. If the backpack size is 12. we can select [2, 3, 7] so that we can fulfill the backpack.

You function should return the max size we can fill in the given backpack.

Challenge
O(n x m) time and O(m) memory.

O(n x m) memory is also acceptable if you do not know how to optimize memory.
*/

/*
f[i][j]: 前i个数 取其中一些数 使其和为j
function： 取第i个数 f[i][j] = f[i-1][j-a[i]]
			不取第i个数 f[i][j] = f[i-1][j]
initiale: f[i][0] = true 且 f[0][1....m] = false
answer: f[n][X] X最大且小于m
*/

/**
 * @param m: An integer m denotes the size of a backpack
 * @param A: Given n items with size A[i]
 * @return: The maximum size
 */
const backPack = function(m, A) {
    if (m === 0 || !A.length) {
        return 0;
    }

    const len = A.length;
    const dp = [];

    for (let i = 0; i <= len; i++) {
        const temp = new Array(m + 1).fill(false);
        temp[0] = true;
        dp.push(temp);
    }

    for (let i = 1; i <= len; i++) {
        for (let j = 1; j <= m; j++) {
            dp[i][j] = dp[i - 1][j];
            if (j >= A[i - 1] && dp[i - 1][j - A[i - 1]]) {
                dp[i][j] = true;
            }
        }
    }

    for (let i = m; i >= 0; i--) {
        if (dp[len][i]) {
            return i;
        }
    }

    return 0;
}


/*
f[i]: 背包只有i个容量 能最多装多少
function： 背包有i的容量 在第j个物体的时候 要么f[i - A[j]]+A[j] 要么 f[j]
initiale: f[0] = 0
answer: f[m]
*/

/**
 * @param m: An integer m denotes the size of a backpack
 * @param A: Given n items with size A[i]
 * @return: The maximum size
 */
const backPack = function(m, A) {
    const dp = new Array(m + 1).fill(0);
    for (let i = 0; i < A.length; i++) {
        for (let j = m; j >= A[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - A[i]] + A[i]);
        }
    }

    return dp[m];
}