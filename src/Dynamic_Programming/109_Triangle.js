/*
Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

Example
Given the following triangle:

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
*/

/**
 * @param triangle: a list of lists of integers
 * @return: An integer, minimum path sum
 */
const minimumTotal = function(triangle) {
	if (!triangle.length) {
		return 0;
	}

	return helper(triangle, 0, 0);
};

const helper = function(triangle, x, y) {
	if (x === triangle.length) {
		return 0;
	}

	const left = helper(triangle, x + 1, y);
	const right =
		x + 1 === triangle.length || y + 1 === triangle[x + 1].length
			? Number.MIN_VALUE
			: helper(triangle, x + 1, y + 1);

	return triangle[x][y] + Math.min(left, right);
};
