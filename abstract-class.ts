
abstract class AbstractClass {
  private message: string;

  constructor(message: string) {
    this.message = message;
  }
}

// Error
// const abstractClass = new AbstractClass('test');