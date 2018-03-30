/**
Given an input string, reverse the string word by word.

For example,
Given s = "the sky is blue",
return "blue is sky the".

Clarification
What constitutes a word?
A sequence of non-space characters constitutes a word.
Could the input string contain leading or trailing spaces?
Yes. However, your reversed string should not contain leading or trailing spaces.
How about multiple spaces between two words?
Reduce them to a single space in the reversed string.
**/


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
