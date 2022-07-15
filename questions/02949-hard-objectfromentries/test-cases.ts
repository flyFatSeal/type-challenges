import type { Equal, Expect } from '@type-challenges/utils';

type ObjectFromEntries<TEntries extends [string, unknown]> = {
  [key in TEntries[0]]: TEntries extends [key, infer Value] ? Value : never;
};

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries =
  | ['name', string]
  | ['age', number]
  | ['locations', string[] | null];

type cases = [Expect<Equal<ObjectFromEntries<ModelEntries>, Model>>];
