
type ElementType<T> = T extends (infer U)[] ? U : never;

type T11 = ElementType<[]>; // = never
type T12 = ElementType<string[]>; // = string