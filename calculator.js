class Calculator {
  #numX;
  #numY;
  constructor(numX, numY) {
    if (isNaN(numX) || numX === null || isNaN(numY) || numY === null) {
      throw new Error("Некорректный ввод");
    } else {
      this.#numX = Number(numX);
      this.#numY = Number(numY);
    }
  }
  setX(num) {
    if (isNaN(num) || num === null) {
      throw new Error("Число не определено");
    } else {
      this.#numX = num;
    }
  }
  setY(num) {
    if (isNaN(num) || num === null) {
      throw new Error("Число не определено");
    } else {
      this.#numY = num;
    }
  }
  logSum() {
    console.log(this.#numX + this.#numY);
  }
  logMul() {
    console.log(this.#numX * this.#numY);
  }
  logSub() {
    console.log(this.#numX - this.#numY);
  }
  logDiv() {
    if (this.#numY === 0) {
      throw new Error("Деление на ноль!");
    } else {
      console.log(this.#numX / this.#numY);
    }
  }
}
