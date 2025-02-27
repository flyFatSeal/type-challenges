import type { Equal, Expect } from '@type-challenges/utils';

type IsAny<T> = (<K>() => K extends T ? 1 : 2) extends <K>() => K extends any
  ? 1
  : 2
  ? true
  : false;

//type IsAny<T> = 0 extends (1 & T) ? true : false;

type cases = [
  Expect<Equal<IsAny<any>, true>>,

  Expect<Equal<IsAny<undefined>, false>>,
  Expect<Equal<IsAny<unknown>, false>>,
  Expect<Equal<IsAny<never>, false>>,
  Expect<Equal<IsAny<string>, false>>,
];
