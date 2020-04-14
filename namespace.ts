
namespace Validation {
  interface StringValidator {
    isAcceptable(s: string): boolean;
  }

  const lettersRegexp = /^[a-zA-Z]+$/;
  const numbersRegexp = /^[0-9]+$/;

  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string): boolean {
      return lettersRegexp.test(s);
    }
  }

  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string): boolean {
      return s.length === 5 && numbersRegexp.test(s);
    }
  }
}
