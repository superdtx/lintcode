export default function searchRange(A, target) {
	let start = 0;
	let end = A.length - 1;
	let mid;

	let bound = [-1, -1];

	while(start + 1 < end) {
		mid = start + Math.floor((end - start)/2);

		if(A[mid] === target){
			end = mid;
		} else if(A[mid] > target){
			end = mid;
		} else if (A[mid] < target){
			start = mid;
		}
	}

	if(A[start] === target){
		bound[0] = start;
	} else if (A[end] === target) {
		bound[0] = end;
	} else {
		return bound;
	}

	start = 0;
	end = A.length - 1;

	while(start + 1 < end){
		mid = start + Math.floor((end - start)/2);

		if(A[mid] === target) {
			start = mid;
		} else if (A[mid] > target) {
			end = mid;
		} else if(A[mid] < target) {
			start = mid;
		}
	}

	if(A[end] === target){
		bound[1] = end;
	} else if (A[start] === target) {
		bound[1] = start;
	} else {
		bound[1] = bound[0];
	}

	return bound;
}
