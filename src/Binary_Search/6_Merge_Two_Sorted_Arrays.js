/*
Merge two given sorted integer array A and B into a new sorted integer array.

Have you met this question in a real interview? 
Example
A=[1,2,3,4]

B=[2,4,5,6]

return [1,2,2,3,4,4,5,6]

Challenge 
How can you optimize your algorithm if one array is very large and the other is very small?

Tags 
Array Sorted Array
**/

/**
 * @param A: sorted integer array A
 * @param B: sorted integer array B
 * @return: A new sorted integer array
 */
export default function mergeSortedArray(A, B) {
	let lenA = A.length,
		lenB = B.length,
		i,
		j,
		index;

	const res = [];

	for (index = 0, i = 0, j = 0; i < lenA && j < lenB; ) {
		if (A[i] > B[j]) {
			res.push(B[j++]);
		} else {
			res.push(A[i++]);
		}
	}

	while (i < lenA) {
		res.push(A[i++]);
	}

	while (j < lenB) {
		res.push(B[j++]);
	}

	return res;
}
