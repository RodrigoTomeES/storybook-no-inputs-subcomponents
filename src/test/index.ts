import { Test } from './Test';
import * as childs from './childs';

export type TypeTest = typeof Test & {
  Title: typeof childs.Title;
};

(Test as TypeTest).Title = childs.Title;

export type { TypeTestProps } from './types';
export type { TypeChildProps } from './childs/types';

export default Test as TypeTest;
