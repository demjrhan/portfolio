import { work } from './work';
import { education } from './education';

export const page1 = {
  primary: {
    n: 1,
  },
  role: work,
  school: education,
} as const;
