export default function binarySearch(nums, target) {
	let start = 0;
	let end = nums.length - 1;
	let mid;

	while (start + 1 < end) {
		mid = start + Math.floor((end - start) / 2);

		if (nums[mid] === target) {
			end = mid;
		} else if (nums[mid] > target) {
			end = mid;
		} else if (nums[mid] < target) {
			start = mid;
		}
	}

	if (nums[start] === target) {
		return start;
	}
	if (nums[end] === target) {
		return end;
	}
	return -1;
}