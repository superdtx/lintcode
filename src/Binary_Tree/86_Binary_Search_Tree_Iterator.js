export default class BSTIterator{
	/*
    * @param root: The root of binary tree.
    */
	constructor(root){
		this.stack = [];
		this.current = root;
	}

	/*
     * @return: True if there has next node, or false
     */
	hasNext(){
		return !!this.current || !!this.stack.length;
	}

	/*
     * @return: return next node
     */
	next(){
		while(!!this.current){
			this.stack.push(this.current);
			this.current = this.current.left;
		}

		this.current = this.stack.pop();
		const node = this.current;
		this.current = this.current.right;

		return node;
	}
}