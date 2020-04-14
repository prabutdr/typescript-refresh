interface Person {
  name: string;
  age: number;
  address?: string;
  sayHi: Function;
}

interface FooPerson extends Person {
  foo: string
}

class You implements FooPerson {
  name: string;
  age: number;
  address?: string | undefined;
  foo: string;
  
  constructor(name: string, age: number, address?: string) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.foo = 'test';
  }

  sayHi = () => 'Hello there!';

  sayBye() {
    console.log('Bye');
  }
}

// only properties 
interface BarYou extends You {
  bar: number;
}

// class BarYouImpl implements BarYou {
//   bar: number;
//   name: string;
//   age: number;
//   address?: string | undefined;
//   foo: string;
//   sayHi: () => string;
//   sayBye(): void {
//     throw new Error("Method not implemented.");
//   }
// }