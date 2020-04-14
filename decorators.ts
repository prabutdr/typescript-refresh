
function log(target: any, key: any, descriptor: any) {
  console.log('log was called');
  console.log('Target', target, typeof target);
  console.log('Key', key, typeof key);
  console.log('Descriptor', descriptor, typeof descriptor);
}

function log2(target: any, key: any, descriptor: any) {
  const originalMethod = descriptor.value;
  descriptor.value = function() {
    console.log('key is called with', arguments);
    return originalMethod.apply(this, arguments);
  };
  // return descriptor;
}

// For class decorator
function init<T extends {new(...args: any[]): {}}>(target: T) {
  return class extends target {
    firstName = 'Doggy';
    lastName = 'Boggy';
  }
}

@init
class DecoratorDemo {
  firstName: string = "";
  lastName: string = "";

  @log2
  foo() {
    console.log('Hello there!', this.firstName, this.lastName);
  }
}

const decoratorDemo = new DecoratorDemo();
decoratorDemo.foo();