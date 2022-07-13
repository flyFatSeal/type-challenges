import type { Equal, Expect } from '@type-challenges/utils';

type String2Union<T, R = ''> = T extends `${infer F}${infer Rest}`
  ? String2Union<Rest, F | R>
  : R;

type DropString<S, R, UR = String2Union<R>> =
  S extends `${infer F}${infer Rest}`
    ? F extends UR
      ? DropString<Rest, R>
      : `${F}${DropString<Rest, R>}`
    : S;

type cases = [
  Expect<Equal<DropString<'butter fly!', ''>, 'butter fly!'>>,
  Expect<Equal<DropString<'butter fly!', ' '>, 'butterfly!'>>,
  Expect<Equal<DropString<'butter fly!', 'but'>, 'er fly!'>>,
  Expect<
    Equal<DropString<' b u t t e r f l y ! ', 'but'>, '     e r f l y ! '>
  >,
  Expect<Equal<DropString<'    butter fly!        ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
  Expect<
    Equal<DropString<' b u t t e r f l y ! ', 'but'>, '     e r f l y ! '>
  >,
  Expect<
    Equal<DropString<' b u t t e r f l y ! ', 'tub'>, '     e r f l y ! '>
  >,
  Expect<
    Equal<DropString<' b u t t e r f l y ! ', 'b'>, '  u t t e r f l y ! '>
  >,
  Expect<
    Equal<DropString<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>
  >,
];
