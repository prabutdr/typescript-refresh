
type Eagle = {
  kind: 'eagle';
  fly: () => 'fly';
}

type Duck = {
  kind: 'duck';
  quack: () => 'quack';
}

type Bird = {
  kind: 'bird';
}

type Animal = Eagle | Duck | Bird;

const doSomething = (animal: Animal): string => {
  switch (animal.kind) {
    case 'eagle':
      return animal.fly();
    case 'duck':
      return animal.quack();
    default:
      return assertNever(animal);
  }
}

const assertNever = (animal: Animal): never => {
  throw new Error(`Unknown animal ${animal.kind}`);
}