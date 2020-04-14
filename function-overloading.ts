
function add(x: string, y: string): string;
function add(x: number, y: number): number;
function add(x: any, y: any): any {
  if (typeof x == 'string' && typeof y == 'string') {
    return `${x}:${y}`;
  } else {
    return x + y;
  }
}

console.log(add(10, 20));
console.log(add('10', '20'));
