/*
There are two sorted arrays A and B of size m and n respectively. Find the median of the two sorted arrays.

Have you met this question in a real interview? 
Example
Given A=[1,2,3,4,5,6] and B=[2,3,4,5], the median is 3.5.

Given A=[1,2,3] and B=[4,5], the median is 3.

Challenge 
The overall run time complexity should be O(log (m+n)).

Tags 
Array Zenefits Divide and Conquer Sorted Array Uber Google
**/

export default function findMedianSortedArrays(A, B) {
	let len = A.length + B.length;

	if (len % 2) {
		return findKth(A, B, Math.ceil(len / 2));
	}

	return findKth(A, B, len / 2) / 2 + findKth(A, B, len / 2 + 1) / 2;
}

function findKth(A, B, k) {
	if (!A.length) {
		return B[k - 1];
	}

	if (!B.length) {
		return A[k - 1];
	}

	if (k === 1) {
		return Math.min(A[0], B[0]);
	}

	const cutoff = Math.floor(k / 2);

	const a = A.length >= cutoff ? A[cutoff - 1] : null;
	const b = B.length >= cutoff ? B[cutoff - 1] : null;

	if ((a && a < b) || !a) {
		return findKth(A.slice(cutoff), B, k - cutoff);
	}

	return findKth(A, B.slice(cutoff), k - cutoff);
}
