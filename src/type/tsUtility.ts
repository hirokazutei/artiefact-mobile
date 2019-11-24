export type Diff<T, U> = T extends U ? never : T;
export type Filter<T, U> = T extends U ? T : never;
