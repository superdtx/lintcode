//first position >= target
export default function searchInsert(A, target){
	let start = 0,
		end = A.length - 1,
		mid;

	while(start + 1 < end) {
		mid = start + Math.floor((end - start)/2);
		if(A[mid] === target){
			return mid;
		} else if (A[mid] > target) {
			end = mid;
		} else {
			start = mid;
		}
	}

	if(A[start] >= target){
		return start;
	} else if(A[end] >= target) {
		return end;
	}

	return end + 1;

	// if(!A.length) {
	// 	return 0;
	// }

	// if(target < A[0]){
	// 	return 0;
	// }

	// if(target > A[end]){
	// 	return A.length;
	// }

	// while(start + 1 < end){
	// 	mid = start + Math.floor((end - start)/2);

	// 	if(A[mid] === target){
	// 		end = mid;
	// 	} else if(A[mid] > target) {
	// 		end = mid;
	// 	} else if(A[mid] < target) {
	// 		start = mid;
	// 	}
	// }

	// if(A[start] === target){
	// 	return start;
	// } 

	// if(A[end] === target){
	// 	return end;
	// }

	// return start + 1;
}