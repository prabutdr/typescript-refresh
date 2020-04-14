
interface Swimmer1 {
  speed: number;
  swim(distance: number): number;
}

interface Runner1 {
  speed: number;
  run(distance: number): number;
}

type PersonSR1 = Swimmer1 | Runner1;

const personSR1: PersonSR1 = {
  speed: 10,
  
  swim(distance: number) {
    return distance * this.speed;
  },

  run(distance: number) {
    return distance * this.speed;
  }

}

// Error due to ambiguity
// console.log(personSR1.run(10));
// console.log(personSR1.swim(20));

// TypeGuards will help here
function isSwimmer(person: Swimmer1 | Runner1): person is Swimmer1 {
  return (<Swimmer1>person).swim !== undefined;
}

function isRunner(person: Swimmer1 | Runner1): person is Runner1 {
  return (<Runner1>person).run !== undefined;
}

if (isSwimmer(personSR1)) {
  console.log(personSR1.swim(30));
}

if (isRunner(personSR1)) {
  console.log(personSR1.run(20));
}

// With primitive
type NumberOrString = number | string;
let numberOrString: NumberOrString = 10;
console.log(numberOrString, typeof numberOrString);
numberOrString = '30';
console.log(numberOrString, typeof numberOrString);
// numberOrString = true;

function addWithUnionType(x: string | number, y: string | number): string | number {
  if (typeof x === 'string' || typeof y === 'string') {
    return `${x}:${y}`;
  } else {
    return x + y;
  }
}

console.log(addWithUnionType(10, 20));
console.log(addWithUnionType('10', 20));
