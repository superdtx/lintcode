export default function findPeak(A){
	let start = 0,
		end = A.length - 1,
		mid;

	while(start + 1 < end) {
		mid = start + Math.floor((end - start)/2);

		if(A[mid] > A[mid-1] && A[mid] > A[mid+1]){
			return mid;
		} else if( A[mid] > A[mid-1] && A[mid] < A[mid+1]){
			start = mid;
		} else {
			end = mid;
		}
	}

	if (A[start] > A[start-1] && A[start] > A[start+1]){
		return start;
	}
            
    if (A[end] > A[end-1] && A[end] > A[end+1]){
        return end
    }

	return -1;
}