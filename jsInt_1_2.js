function checkValidNumbers() {
	let firstInput = prompt('Введите первое число');
	if (isNaN(firstInput)) {
		console.log('Некорректный ввод!');
		return;
	}
	let secondInput = prompt('Введите второе число');
	if (isNaN(secondInput)) {
		console.log('Некорректный ввод!');
		return;
	}
	console.log(
		`Ответ: ${Number(firstInput) + Number(secondInput)}, ${
			Number(firstInput) / Number(secondInput)
		}.`
	);
}

checkValidNumbers();
