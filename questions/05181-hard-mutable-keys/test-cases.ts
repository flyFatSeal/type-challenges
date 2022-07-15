import type { Equal, Expect } from '@type-challenges/utils';

type MutableKeys<T, K = keyof T> = K extends keyof T
  ? Equal<Pick<T, K>, Readonly<Pick<T, K>>> extends true
    ? never
    : K
  : never;

type cases = [
  Expect<Equal<MutableKeys<{ a: number; readonly b: string }>, 'a'>>,
  Expect<Equal<MutableKeys<{ a: undefined; readonly b: undefined }>, 'a'>>,
  Expect<
    Equal<
      MutableKeys<{ a: undefined; readonly b?: undefined; c: string; d: null }>,
      'a' | 'c' | 'd'
    >
  >,
  Expect<Equal<MutableKeys<{}>, never>>,
];
