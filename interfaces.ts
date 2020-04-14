interface Person {
  name: string;
  age: number;
  address?: string;
  sayHi: Function;

  readonly foo: string
}

let person: Person = {
  name: 'Prabu',
  sayHi: () => 'Hello there!',
  age: 12,
  foo: 'readonly'
}

// person.foo = 'can not change readonly property';

interface PhoneNumber {
  primaryPhone: string,
  [key: string]: string // To specify excess property
}

let phoneNumber: PhoneNumber = {
  primaryPhone: '1234',
  secondaryPhone: '5678'
}

