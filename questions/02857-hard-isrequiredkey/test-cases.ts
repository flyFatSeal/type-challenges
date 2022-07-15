import type { Equal, Expect } from '@type-challenges/utils';

type IsRequiredKey<T, K extends keyof T> = T[K] extends Required<T>[K]
  ? true
  : false;

type cases = [
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, 'a'>, true>>,
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, 'b'>, false>>,
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, 'b' | 'a'>, false>>,
];
