
class Greeter {
  private message: string;
  protected name: string = 'greeting';
  readonly foo: string = 'bar';
  static greeter: any;

  constructor(message: string) {
    this.message = message;
  }

  public greet() {
    return `Hello ${this.message} from ${this.name}`;
  }
}