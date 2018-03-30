export default function reverseWords(s) {
	const wordArray = s.split(" ").filter(w => (w !== ''));

	let start = 0,
		end = wordArray.length - 1;

	while (start < end) {
		if(!wordArray[start]){
			start++;
		}

		if(!wordArray[end]){
			end--;
		}

		let tmp = wordArray[start];
		wordArray[start] = wordArray[end];
		wordArray[end] = tmp;
		start++;
		end--;
	}

	return wordArray.join(" ");
}
