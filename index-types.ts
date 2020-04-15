type Duck1 = {
  colors: string;
  feathers: number;
}

type DuckProps = keyof Duck1; // = 'colors' | 'feathers'
type ColorType = Duck1['colors']; // = string
type DuckValues = Duck1[DuckProps]; // = string | number


interface Bird1 {
  name: string;
  weight: number;
}

const bird: Bird1 = {
  name: 'Tikku',
  weight: 10.5
};

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(name => o[name]);
}

const resIndexType = pluck(bird, ['name', 'weight']);
console.log(resIndexType);