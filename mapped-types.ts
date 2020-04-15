
type ReadonlyNew<T> = {
  readonly [K in keyof T]: T[K] | null;
};

type PartialNew<T> = {
  [K in keyof T]?: T[K];
}

interface MappedTypeObj {
  name: string,
  age: number,
  weight?: number
}

type ReadonlyNewMappedTypeObj = ReadonlyNew<MappedTypeObj>;
type PartialNewMappedTypeObj = PartialNew<MappedTypeObj>;

type Nullable<T> = { [P in keyof T]: T[P] | null };
type NullableMappedTypeObj = Nullable<MappedTypeObj>;


// Some part of lib now
type ReadonlyMappedTypeObj = Readonly<MappedTypeObj>;
type ReadonlyPerson = Readonly<Person>;

type PartialMappedTypeObj = Partial<MappedTypeObj>;

// type Required<T> = { [P in keyof T]-?: T[P] };
type RequiredMappedTypeObj = Required<MappedTypeObj>;

// type Pick<T, K extends keyof T> = { [P in K]: T[P] }
type PickMappedTypeObj = Pick<MappedTypeObj, 'age'>;