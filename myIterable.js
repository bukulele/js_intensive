const myIterable = {
	from: 5,
	to: 4,
};

myIterable[Symbol.iterator] = function () {
	if (
		this.from > this.to ||
		!this.from ||
		!this.to ||
		isNaN(this.from) ||
		isNaN(this.to)
	) {
		throw new Error('Ошибка данных!');
	} else {
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
	}
};
