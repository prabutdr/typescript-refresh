
type ReadonlyNew<T> = {
  readonly [K in keyof T]: T[K] | null;
};

type PartialNew<T> = {
  [K in keyof T]?: T[K];
}

interface MappedTypeObj {
  name: string,
  age: number,
  weight: number
}

type ReadonlyMappedTypeObj = ReadonlyNew<MappedTypeObj>;

type PartialMappedTypeObj = PartialNew<MappedTypeObj>;