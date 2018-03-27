export default function findMin(nums){
	let start = 0,
		end = nums.length - 1,
		mid;

	while(start + 1 < end){
		mid = start + Math.floor((end - start) / 2);

		if(nums[mid] >= nums[end]){
			start = mid;
		} else {
			end = mid;
		}
	}

	if(nums[end] < nums[start]){
		return nums[end];
	} else {
		return nums[start];
	}
}
