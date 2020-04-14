
// Boolean
const isAllowed: boolean = true;

// Number
const num: number = 10;

// String
const word: string = 'Hello';

// Array of string
const tokens: string[] = ['foo', 'bar']; 

// Array of string - alternative way
const words: Array<string> = ['foo', 'bar'];

// Any
const unknown: any = { foo: 'bar' };

// Object
const obj: object = { foo: 'bar' };

// Tuple
const twoValues: [string, boolean] = ['foo', false];
const threeValues: [string, number, boolean] = ['foo', 20, false];

// Void
const noValue: void = undefined;

// Undefined
const notDefined: undefined = undefined;

// Null
const nullable: null = null;

// Never
function error(message: string): never {
  throw new Error(message);
}