export default function search(A, target){
	let start = 0,
		end = A.length - 1,
		mid;

	while(start + 1 < end){
		mid = start + Math.floor((end - start)/2);

		if(A[mid] === target) {
			return mid;
		} 


		if(A[start] < A[mid]) {
			if(A[start] <= target && target <= A[mid]){
				end = mid;
			} else {
				start = mid;
			}
		} else {
			if(A[mid] <= target && target <= A[end]){
				start = mid;
			} else {
				end = mid;
			}
		}
	}

	if(A[start] === target){
		return start;
	}
	if(A[end] === target){
		return end;
	}

	return -1;
}