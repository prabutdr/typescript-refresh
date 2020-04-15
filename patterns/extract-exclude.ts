type Filter<T, U> = T extends U ? T : never;
type T1 = Filter<"a" | "b", "a">; //  = "a"

// Natively available as extract
type T2 = Extract<"a" | "b", "a">; // = "a"

type Diff<T, U> = T extends U ? never: T;
type T3 = Diff<"a" | "b", "a">; // = "b"

// Natively available as Exclude
type T4 = Exclude<"a" | "b", "a">; // = "b"

type NonNullable<T> = Exclude<T, null | undefined>;
type T = NonNullable<string | null | undefined>;
// = string

export{};