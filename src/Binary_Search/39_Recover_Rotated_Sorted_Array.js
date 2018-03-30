/**
Given a rotated sorted array, recover it to sorted array in-place.

Clarification
What is rotated array?

For example, the orginal array is [1,2,3,4], The rotated array of it can be [1,2,3,4], [2,3,4,1], [3,4,1,2], [4,1,2,3]
Example
[4, 5, 1, 2, 3] -> [1, 2, 3, 4, 5]

Challenge 
In-place, O(1) extra space and O(n) time.
**/

/**
reverse in 3 steps
**/

export default function recoverRotatedSortedArray(nums) {

	if(!nums.length){
		return nums;
	}

	const breakpoint = findMinimum(nums);

	if(!breakpoint) {
		return nums;
	}

	reverseSortedArray(nums, 0, breakpoint - 1);
	reverseSortedArray(nums, breakpoint, nums.length - 1);
	reverseSortedArray(nums, 0, nums.length - 1);

	return nums;
}

function findMinimum(nums){
	let index = nums.length - 1;

	while (index > 0) {
		if(nums[index - 1] > nums[index]) {
			break;
		}
		index--;
	}

	return index;
}

function reverseSortedArray(nums, start, end) {
	while (start < end) {
		let temp = nums[start];
		nums[start] = nums[end];
		nums[end] = temp;
		start++;
		end--;
	}
	return nums;
}