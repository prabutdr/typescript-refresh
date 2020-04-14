
interface Swimmer1 {
  speed: number;
  swim(distance: number): number;
}

interface Runner1 {
  speed: number;
  run(distance: number): number;
}

type PersonSR = Swimmer1 & Runner1;

const personSR: PersonSR = {
  speed: 10,
  
  run(distance: number): number {
    return distance * this.speed;
  },

  swim(distance: number) {
    return distance * this.speed;
  }

}

console.log(personSR.run(10));
console.log(personSR.swim(20));

// With primitive - is not possible
type NumberAndString = number & string;
// let numberAndString: NumberAndString = 10; // ERROR
