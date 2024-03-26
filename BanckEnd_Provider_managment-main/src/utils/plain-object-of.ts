export type PlainObjectOf<T> = {
  [P in keyof T]: T[P];
};
