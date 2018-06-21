/*
Given a string s and a dictionary of words dict, determine if s can be break into a space-separated sequence of one or more dictionary words.

Example
Given s = "lintcode", dict = ["lint", "code"].

Return true because "lintcode" can be break as "lint code".
*/

/**
 * @param s: A string
 * @param dict: A dictionary of words dict
 * @return: A boolean
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if(!s.length){
		return false;
	}

    const len = s.length;
	const dp = new Array(len+1).fill(false);
    dp[0] = true;
	dp[1] = wordDict.indexOf(s[0]) !== -1;

	for(let i = 1; i <= len; i++){
		for(let j = 0; j < i; j++){
			dp[i] = dp[i] || (dp[j] && wordDict.indexOf(s.slice(j, i)) !== -1);
		}
	}

	return dp[len];
};

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak1 = function(s, wordDict) {
    if(!s.length){
		return false;
	}

    let maxWordLength = 0;
    for(let word of wordDict){
        maxWordLength = Math.max(maxWordLength, word.length);
    }
    
	const len = s.length;
	const dp = new Array(len+1).fill(false);
    dp[0] = true;
	dp[1] = wordDict.indexOf(s[0]) !== -1;

	for(let i = 1; i <= len; i++){
		// j is the distance to i
		for(let j = 1; j <= maxWordLength && j <= i; j++){
            const word = s.slice(i - j, i);
			dp[i] = dp[i] || (dp[i-j] && wordDict.indexOf(word) !== -1);
		}
	}
    
	return dp[len];
};


export default wordBreak;