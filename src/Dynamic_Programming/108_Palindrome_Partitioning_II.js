/*
Given a string s, cut s into some substrings such that every substring is a palindrome.

Return the minimum cuts needed for a palindrome partitioning of s.

Example
Given s = "aab",

Return 1 since the palindrome partitioning ["aa", "b"] could be produced using 1 cut.
*/

/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
	if (!s.length) {
		return 0;
	}
	const len = s.length;
	// how many cut needed
	const dp = [];
	for (let i = 0; i <= len; i++) {
		dp.push(i - 1);
	}

	for (let i = 1; i <= len; i++) {
		for (let j = 0; j < i; j++) {
			if (isPalindrome(s, j, i - 1)) {
				dp[i] = Math.min(dp[i], dp[j] + 1);
			}
		}
	}
	console.log(dp);

	return dp[len];
};

const isPalindrome = function(s, start, end) {
	let i = 0;

	while (start + i < end - i) {
		if (s[start + i] !== s[end - i]) {
			return false;
		}

		i++;
	}

	return true;
};

/**
 * @param {string} s
 * @return {number}
 */

/*
HASH TABLE TO MEMORIZE PALINDROME STATUS
记忆化搜索
*/
var minCut = function(s) {
	if (!s.length) {
		return 0;
	}
	const len = s.length;
	// how many cut?
	const dp = [];
	for (let i = 0; i <= len; i++) {
		dp.push(i - 1);
	}

	const isPalindrome = getIsPalindrome(s);

	for (let i = 1; i <= len; i++) {
		for (let j = 0; j < i; j++) {
			if (isPalindrome[j][i - 1]) {
				dp[i] = Math.min(dp[i], dp[j] + 1);
			}
		}
	}

	return dp[len];
};

const getIsPalindrome = function(s) {
	const isPalindrome = [];
	const len = s.length;
	for (let i = 0; i < len; i++) {
		const temp = new Array(len).fill(true);
		isPalindrome.push(temp);
	}

	for (let i = 0; i < len - 1; i++) {
		isPalindrome[i][i + 1] = s[i] === s[i + 1];
	}

	for (let distance = 2; distance < len; distance++) {
		for (let start = 0; start + distance < len; start++) {
			isPalindrome[start][start + distance] =
				isPalindrome[start + 1][start + distance - 1] &&
				s[start] === s[start + distance];
		}
	}

	return isPalindrome;
};
