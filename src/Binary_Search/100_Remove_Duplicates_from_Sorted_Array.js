export default function removeDuplicates(A){

	let count = 1;
	const len = A.length;

	while(count < len){
		if(A[count - 1] === A[count]){
			A.splice(count, 1);
		} else {
			count++;
		}
	}

	return A.length;
}