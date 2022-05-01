class Queue {
	constructor() {
		this.storage = [];
	}
	enqueue(elem) {
		this.storage.unshift(elem);
	}
	dequeue() {
		let popped = this.storage.pop();
		return popped;
	}
	front() {
		return this.storage[this.storage.length - 1];
	}
	isEmpty() {
		return this.storage.length === 0;
	}
	size() {
		return this.storage.length;
	}
}
