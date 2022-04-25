function makeObjectDeepCopy(obj) {
	let objCopy = {};
	for (key in obj) {
		if (typeof obj[key] === 'object') {
			if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
				objCopy[key] = makeObjectDeepCopy(obj[key]);
			} else if (
				Object.prototype.toString.call(obj[key]) === '[object Array]'
			) {
				objCopy[key] = Array.from(makeObjectDeepCopy(obj[key]));
			} else if (Object.prototype.toString.call(obj[key]) === '[object Date]') {
				objCopy[key] = new Date(obj[key]);
			}
		} else {
			objCopy[key] = obj[key];
		}
	}
	return objCopy;
}
