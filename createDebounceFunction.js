function createDebounceFunction(func, delay) {
	let timerId = null;
	return function () {
		if (timerId) {
			clearTimeout(timerId);
		}
		timerId = setTimeout(func, delay);
	};
}
