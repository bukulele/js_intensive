Array.prototype.myFilter = function (func, thisArg) {
	let checkArr = [...this];
	let resultArr = [];
	let boundedFunc = func.bind(thisArg);
	for (let i = 0; i < checkArr.length; i++) {
		if (boundedFunc(checkArr[i], i, this)) {
			resultArr.push(checkArr[i]);
		}
	}
	return resultArr;
};
