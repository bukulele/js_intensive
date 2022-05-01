class Stack {
	constructor() {
		this.storage = {};
		this.length = 0;
	}
	push(elem) {
		this.storage[length] = elem;
		length++;
	}
	pop() {
		delete this.storage[length - 1];
		length--;
	}
	peek() {
		return this.storage[length - 1];
	}
}
