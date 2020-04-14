
class BasicCalculator {
  constructor(protected value: number = 0) {}

  currentValue(): number {
    return this.value;
  }

  add(operand: number): this {
    this.value += operand;
    return this;
  }

  multiply(operand: number): this {
    this.value *= operand;
    return this;
  }
}

const resBasicCalc = new BasicCalculator(10)
  .add(2)
  .multiply(3)
  .add(5)
  .currentValue();
console.log(resBasicCalc);