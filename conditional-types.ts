type StringOrNumber<T> = T extends boolean ? string: number;

type T1 = StringOrNumber<true>; // string
type T2 = StringOrNumber<false>; // string
type T3 = StringOrNumber<Object>; // number


type TypeName<T> = 
  T extends string ? "string" :
  T extends number ? "number" :
  T extends boolean ? "boolean" :
  T extends undefined ? "undefined" :
  T extends Function ? "function" :
  "object";

type T0 = TypeName<string>; // "string"