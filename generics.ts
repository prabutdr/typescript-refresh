
class Generic<T> {
  private message: T;

  constructor(message: T) {
    this.message = message;
  }

  public greet() {
    return `Hello ${this.message}`;
  }
}

const generic1 = new Generic(10);
const generic2 = new Generic('World');

console.log(generic1.greet());
console.log(generic2.greet());

interface Lengthwise {
  length: number;
}

function loggingLengthwise<T extends Lengthwise>(args: T[]) {
  for (let arg of args) {
    console.log(arg.length); // Now, we know that arg will have length property
  }
}