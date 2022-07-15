import type { Equal, Expect } from '@type-challenges/utils';

type Split<T extends string, S extends string> = string extends T
  ? string[]
  : T extends `${infer X}${S}${infer Y}`
  ? [X, ...Split<Y, S>]
  : T extends ''
  ? S extends ''
    ? []
    : ['']
  : [T];

type cases = [
  Expect<Equal<Split<'Hi! How are you?', 'z'>, ['Hi! How are you?']>>,
  Expect<Equal<Split<'Hi! How are you?', ' '>, ['Hi!', 'How', 'are', 'you?']>>,
  Expect<
    Equal<
      Split<'Hi! How are you?', ''>,
      [
        'H',
        'i',
        '!',
        ' ',
        'H',
        'o',
        'w',
        ' ',
        'a',
        'r',
        'e',
        ' ',
        'y',
        'o',
        'u',
        '?',
      ]
    >
  >,
  Expect<Equal<Split<'', ''>, []>>,
  Expect<Equal<Split<'', 'z'>, ['']>>,
  Expect<Equal<Split<string, 'whatever'>, string[]>>,
];
