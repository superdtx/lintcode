export default function findMin(nums){
	let start = 0,
		end = nums.length - 1,
		mid;

	while(start + 1 < end) {
		mid = start + Math.floor((end - start)/2);

		if(nums[mid] > nums[end]) {
			start = mid;
		} else if (nums[mid] < nums[end]){
			end = mid;
		} else {
			end--;
		}
	}

	if(nums[start] < nums[end]){
		return nums[start];
	} 
		
	return nums[end];
}