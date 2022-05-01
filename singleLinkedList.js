class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
	defineNextNode(node) {
		this.next = node;
	}
}

class SingleLinkedList {
	constructor() {
		this.length = 0;
		this.headNode = null;
	}
	size() {
		return this.length;
	}
	head() {
		return this.headNode;
	}
	add(element) {
		const newNode = new Node(element);
		if (this.length === 0) {
			this.headNode = newNode;
			this.length++;
		} else {
			let node = this.headNode;
			while (node.next !== null) {
				node = node.next;
			}
			node.defineNextNode(newNode);
			this.length++;
		}
	}
	remove(element) {
		if (element === this.headNode && this.length > 1) {
			this.headNode = this.headNode.next;
			this.length--;
		} else if (element === this.headNode && this.length === 1) {
			this.headNode = null;
			this.length = 0;
		} else {
			let nodeCurrent = this.headNode;
			let nodeNext = nodeCurrent.next;
			let index = 1;
			while (element !== nodeNext.element || index < this.length - 2) {
				nodeCurrent = nodeNext;
				nodeNext = nodeCurrent.next;
				index++;
			}
			if (element === nodeNext.element) {
				nodeCurrent.defineNextNode(nodeNext.next);
				this.length--;
			} else {
				throw new Error('Такого элемента нет в списке');
			}
		}
	}
	indexOf(element) {
		let node = this.headNode;
		let index = 0;
		while (element !== node.element || index < this.length - 2) {
			node = node.next;
			index++;
		}
		if (element === node.element) {
			return index;
		} else {
			throw new Error('Такого элемента нет в списке');
		}
	}
	elementAt(index) {
		if (index > this.length - 1) {
			throw new Error('Такого индекса нет');
		} else {
			let node = this.headNode;
			for (let i = 0; i < index; i++) {
				node = node.next;
			}
			return node;
		}
	}
	addAt(index, element) {
		const newNode = new Node(element);
		if (this.length === 0 && index === 0) {
			this.headNode = newNode;
			this.length++;
		} else if (this.length === 0 && index > 0) {
			throw new Error('Список элементов пуст');
		} else if (index <= this.length - 1 && index !== 0) {
			let currentNode = this.headNode;
			let nextNode = this.headNode.next;
			let i = 1;
			while (i !== index) {
				currentNode = nextNode;
				nextNode = currentNode.next;
				i++;
			}
			newNode.defineNextNode(nextNode);
			currentNode.defineNextNode(newNode);
			this.length++;
		} else if (index <= this.length - 1 && index === 0) {
			newNode.defineNextNode(this.headNode);
			this.headNode = newNode;
			length++;
		} else {
			throw new Error('Индекс за пределом списка');
		}
	}
	removeAt(index) {
		if (index > this.length - 1) {
			throw new Error('Индекс за пределом списка');
		} else {
			let currentNode = this.headNode;
			let nextNode = currentNode.next;
			if (index === 0) {
				this.headNode = nextNode;
				length--;
			} else {
				let i = 1;
				while (i !== index) {
					currentNode = nextNode;
					nextNode = currentNode.next;
					i++;
				}
				currentNode.defineNextNode(nextNode.next);
				this.length--;
			}
		}
	}
}
