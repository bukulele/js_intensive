function selectFromInterval(arr, firstValue, secondValue) {
	if (
		!(arr instanceof Array) ||
		isNaN(firstValue) ||
		isNaN(secondValue) ||
		arr.some((val) => isNaN(val))
	) {
		throw new Error('Некорректный ввод!');
	} else {
		let resultArr = [];
		let intStart = firstValue < secondValue ? firstValue : secondValue;
		let intEnd = firstValue < secondValue ? secondValue : firstValue;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] >= intStart && arr[i] <= intEnd) {
				resultArr.push(arr[i]);
			}
		}
		return resultArr;
	}
}
