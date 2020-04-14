interface Bird {
  name: string;
  weight: number;
}

const bird: Bird = {
  name: 'Tikku',
  weight: 10.5
};

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(name => o[name]);
}

const resIndexType = pluck(bird, ['name', 'weight']);
console.log(resIndexType);