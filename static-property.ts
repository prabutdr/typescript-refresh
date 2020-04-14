
class Greeter1 {
  static greeter: string = 'foo';

  private message: string;

  constructor(message: string) {
    this.message = message;
  }

  public greet() {
    return `Hello ${this.message} from ${Greeter1.greeter}`;
  }
}