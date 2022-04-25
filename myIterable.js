const myIterable = {
	from: 1,
	to: 4,
	[Symbol.iterator]: function () {
		return {
			current: this.from,
			last: this.to,
			next: function () {
				if (this.current <= this.last) {
					return { value: this.current++, done: false };
				} else {
					return { value: this.current, done: true };
				}
			},
		};
	},
};

for (let item of myIterable) {
	console.log(item);
}
