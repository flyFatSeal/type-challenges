import type { Equal, Expect } from '@type-challenges/utils';

type Reserve<T, R extends string = ''> = T extends `${infer F}${infer Rest}`
  ? Reserve<Rest, `${F}${R}`>
  : R;

type IsPalindrome<T extends number | string, U = Reserve<`${T}`>> =
  `${T}` extends U ? true : false;

type cases = [
  Expect<Equal<IsPalindrome<'abc'>, false>>,
  Expect<Equal<IsPalindrome<'b'>, true>>,
  Expect<Equal<IsPalindrome<'abca'>, false>>,
  Expect<Equal<IsPalindrome<'abcba'>, true>>,
  Expect<Equal<IsPalindrome<121>, true>>,
  Expect<Equal<IsPalindrome<19260817>, false>>,
];
