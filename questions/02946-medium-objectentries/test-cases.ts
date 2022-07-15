import type { Equal, Expect } from '@type-challenges/utils';

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ObjectFromEntries<TEntries extends [string, unknown]> = {
  [key in TEntries[0]]: TEntries extends [key, infer Value] ? Value : never;
};

type ModelEntries =
  | ['name', string]
  | ['age', number]
  | ['locations', string[] | null];

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>,
];
