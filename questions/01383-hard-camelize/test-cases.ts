import type { Equal, Expect } from '@type-challenges/utils';

type _Camelize<T> = T extends `${infer F}_${infer R}`
  ? `${F}${_Camelize<Capitalize<R>>}`
  : T;

type Camelize<T> = {
  [K in keyof T as _Camelize<K>]: T[K] extends unknown[]
    ? ArrayMap<T[K]>
    : Camelize<T[K]>;
};
type ArrayMap<TArray extends Array<unknown>> = TArray extends [
  infer First,
  ...infer Rest
]
  ? [Camelize<First>, ...ArrayMap<Rest>]
  : TArray;

type cases = [
  Expect<
    Equal<
      Camelize<{
        some_prop: string;
        prop: { another_prop: string };
        array: [
          { snake_case: string },
          { another_element: { yet_another_prop: string } },
          { yet_another_element: string },
        ];
      }>,
      {
        someProp: string;
        prop: { anotherProp: string };
        array: [
          { snakeCase: string },
          { anotherElement: { yetAnotherProp: string } },
          { yetAnotherElement: string },
        ];
      }
    >
  >,
];
