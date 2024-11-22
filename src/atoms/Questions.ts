import { atom } from 'recoil';

export const QuestionsAtom = atom({
  key: 'QuestionAtomKey',
  default: ['', '', ''],
});
