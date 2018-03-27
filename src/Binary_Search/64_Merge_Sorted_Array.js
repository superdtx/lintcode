export default function mergeSortedArray(A, m, B, n) {
	let i = m - 1,
		j = n - 1,
		index = m + n - 1;

	let k = 0;

	while(k < n){
		A.push(0);
		k++;
	}

	while (i > -1 && j > -1) {
		if (A[i] > B[j]) {
			A[index] = A[i];
			i--;
		} else {
			A[index] = B[j];
			j--;
		}
		index--;
	}

	while (i >= 0){
		A[index] = A[i];
		i--;
		index--;
	}

	while (j >= 0){
		B[index] = B[j];
		j--;
		index--;
	}

	return A;
}
