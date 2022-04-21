function checkValidNumbers() {
	let firstInput = prompt(
		'Введите первое число в десятичной системе счисления'
	);
	let secondInput = prompt('Введите второе число от 2 до 36');

	if (
		!isNaN(firstInput) &&
		!isNaN(secondInput) &&
		secondInput >= 2 &&
		secondInput <= 36
	) {
		console.log(Number(firstInput).toString(Number(secondInput)));
	} else {
		console.log('Некорректный ввод!');
	}
}

checkValidNumbers();
