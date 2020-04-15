
const validateInt = (s: unknown): number => {
  let n;
  switch(typeof s) {
    case 'number':
      // handle
    case 'string':
      // handle
    // other case
    default:
      throw new Error('Not a number.');
  }
}